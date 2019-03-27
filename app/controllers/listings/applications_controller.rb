# frozen_string_literal: true

module Listings
  # Rails controller for views/actions related to applications for a listing
  class ApplicationsController < ApplicationController
    before_action :authenticate_user!
    before_action :load_listing
    before_action :validate_listing!

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
        @applications = []
      else
        @applications = soql_application_service.listing_applications(params[:listing_id])
      end

      @fields = soql_application_service.index_fields
    end

    def new; end

    private

    def validate_listing!
      raise Force::RecordNotFound, "Listing #{params[:listing_id]} not found" unless @listing.present?
    end

    def load_listing
      # Here we use the USE_DB_FOR_LISTINGS env var to allow us to toggle
      # back and forth between using the new approach of using a Postgres
      # DB vs the old way of using Salesforce as the data source. This is
      # useful while we're in the early stages of development to allow us
      # to easily pull in data from Salesforce and check how it looks.
      # TODO: Remove this check on the USE_DB_FOR_LISTINGS env var once
      # development is far along enough that we don't need to be able to
      # switch back to Salesforce to check data.
      if ENV['USE_DB_FOR_LISTINGS'] == 'true'
        @listing = Listing.find(params[:listing_id]).to_salesforce_from_db
      else
        @listing = listing_service.listing(params[:listing_id])
      end
    end

    def listing_service
      Force::ListingService.new(current_user)
    end

    def soql_application_service
      Force::Soql::ApplicationService.new(current_user)
    end
  end
end
