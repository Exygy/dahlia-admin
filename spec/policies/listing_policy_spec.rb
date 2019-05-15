# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ListingPolicy, type: :policy do
  let(:group1) { Group.create(name: 'Test Group 1') }
  let(:group2) { Group.create(name: 'Test Group 2') }
  let(:admin_user) { User.new(group: group1) }
  let(:superadmin_user) { User.new(role: :superadmin) }

  subject { described_class }

  permissions '.scope' do
    before :all do
      # For these scope tests, we need a blank table
      Listing.destroy_all
    end

    before :each do
      Listing.create(name: 'Listing for Group 1', group: group1)
      Listing.create(name: 'Listing for Group 2', group: group2)
      Listing.create(name: 'Listing 2 for Group 2', group: group2)
    end

    it 'provides only accessible listings for the admin' do
      listings = ListingPolicy::Scope.new(admin_user, Listing).resolve
      expect(listings.count).to eq(1)
    end

    it 'provides all listings for a superadmin' do
      listings = ListingPolicy::Scope.new(superadmin_user, Listing).resolve
      expect(listings.count).to eq(3)
    end

    it 'shows listings for hierarchical groups' do
      parent_group = Group.create(name: 'Parent')
      child_group = Group.create(name: 'Child', parent: parent_group)
      parent_group = parent_group.reload

      li1 = Listing.create(name: 'Listing for Parent Group', group: parent_group)
      li2 = Listing.create(name: 'Listing for Child Group', group: child_group)

      # User can see parent and child group listings
      user = User.new(group: parent_group)
      listings = ListingPolicy::Scope.new(user, Listing).resolve
      expect((listings.pluck(:id) & [li1.id, li2.id]).length).to eq(2)

      # User of child group can only see child listings
      child_user = User.new(group: child_group)
      child_listings = ListingPolicy::Scope.new(child_user, Listing).resolve
      expect((child_listings.pluck(:id) & [li1.id, li2.id]).length).to eq(1)
    end
  end

  permissions :show? do
    it 'allows access only for the appropriate admin' do
      expect(subject).not_to permit(admin_user, Listing.new(name: 'Listing for Group 2', group: group2))
      expect(subject).to permit(admin_user, Listing.new(name: 'Listing for Group 1', group: group1))
    end

    it 'allows full access to the superadmin' do
      expect(subject).to permit(superadmin_user, Listing.new(name: 'Listing for Group 2', group: group2))
      expect(subject).to permit(superadmin_user, Listing.new(name: 'Listing for Group 1', group: group1))
    end
  end
end
