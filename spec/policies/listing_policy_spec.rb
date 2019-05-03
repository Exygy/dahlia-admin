# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ListingPolicy, type: :policy do
  let(:group1) { Group.create(name: 'Test Group 1') }
  let(:group2) { Group.create(name: 'Test Group 2') }
  let(:admin_user) { User.new(group: group1) }
  let(:superadmin_user) { User.new(role: :superadmin) }

  subject { described_class }

  permissions '.scope' do
    before :each do
      Listing.create(name: 'Listing for Group 1', group: group1)
      Listing.create(name: 'Listing for Group 2', group: group2)
      Listing.create(name: 'Listing 2 for Group 2', group: group2)
    end

    it 'provides only acessible listings for the admin' do
      listings = ListingPolicy::Scope.new(admin_user, Listing).resolve
      expect(listings.count).to eq(1)
    end

    it 'provides all listings for a superadmin' do
      listings = ListingPolicy::Scope.new(superadmin_user, Listing).resolve
      expect(listings.count).to eq(3)
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
