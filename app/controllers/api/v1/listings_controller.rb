# frozen_string_literal: true

# Controller for listing objects
class Api::V1::ListingsController < ApplicationController
  before_action :authenticate_user!

  def create
    @listing = Listing.new(listing_params)
    @listing.save

    render json: { id: @listing.id }
  end

  def update
    @listing = Listing.find(params[:id])
    @listing.update_attributes(listing_params)

    render json: { id: @listing.id }
  end

  private

  def listing_params
    # Allow all the attributes for now!
    params.require(:listing).permit!
  end
end
