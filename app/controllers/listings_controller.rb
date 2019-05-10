# frozen_string_literal: true

# Controller for listing objects
class ListingsController < ApplicationController
  before_action :authenticate_user!

  def index
    authorize Listing
    @listings = policy_scope(Listing)
  end

  def show
    @listing = authorize Listing.find(params[:id])
  end

  def new
    @listing = Listing.new
  end

  def edit
    @listing = authorize Listing.find(params[:id])
  end

  private

  def listing_params
    # Allow all the attributes for now!
    params.require(:listing).permit!
  end
end
