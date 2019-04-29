# frozen_string_literal: true

# Controller for listing objects
class ListingsController < ApplicationController
  before_action :authenticate_user!

  def index
    @listings = Listing.all
  end

  def show
    @listing = Listing.find(params[:id])
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
