# frozen_string_literal: true

# Controller for listings objects
class ListingsController < ApplicationController
  before_action :authenticate_user!

  def index
    # Here we use the USE_DB_FOR_LISTINGS env var to allow us to toggle
    # back and forth between using the new approach of using a Postgres
    # DB vs the old way of using Salesforce as the data source. This is
    # useful while we're in the early stages of development to allow us
    # to easily pull in data from Salesforce and check how it looks.
    # TODO: Remove this check on the USE_DB_FOR_LISTINGS env var once
    # development is far along enough that we don't need to be able to
    # switch back to Salesforce to check data.
    if ENV['USE_DB_FOR_LISTINGS'] == 'true'
      @listings = Listing.all.map(&:to_salesforce_from_db)
    else
      @listings = service.listings
    end

    @fields = service.index_fields
  end

  def show
    # Here we use the USE_DB_FOR_LISTINGS env var to allow us to toggle
    # back and forth between using the new approach of using a Postgres
    # DB vs the old way of using Salesforce as the data source. This is
    # useful while we're in the early stages of development to allow us
    # to easily pull in data from Salesforce and check how it looks.
    # TODO: Remove this check on the USE_DB_FOR_LISTINGS env var once
    # development is far along enough that we don't need to be able to
    # switch back to Salesforce to check data.
    if ENV['USE_DB_FOR_LISTINGS'] == 'true'
      @listing = Listing.find(params[:id]).to_salesforce_from_db
    else
      @listing = service.listing(params[:id])
    end
  end

  private

  def service
    Force::ListingService.new(current_user)
  end
end
