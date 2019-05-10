# frozen_string_literal: true

# Pundit policy for the Listing model
class ListingPolicy < ApplicationPolicy
  def index?
    true
  end

  def create?
    true
  end

  def update?
    if user.superadmin?
      true
    else
      user.group.self_and_descendants.pluck(:id).include? @record.group_id
    end
  end

  # Scope object can be used to fetch records with certain permissions
  class Scope < Scope
    def resolve
      if user.superadmin?
        Listing.all
      else
        user.group.listings_for_self_and_descendants
      end
    end
  end
end
