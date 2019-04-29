# frozen_string_literal: true

# Controller for listing objects
class ListingsController < ApplicationController
  before_action :authenticate_user!

  def index
    @listings = Listing.all.map(&:to_salesforce_from_db)
  end

  def show
    @listing = Listing.find(params[:id]).to_salesforce_from_db
  end

  def new
    @listing = Listing.new
  end

  def edit
    @listing = Listing.find(params[:id])
  end

  private

  def listing_params
    # Allow all the attributes for now!
    params.require(:listing).permit!
  end
end
