# frozen_string_literal: true

# Root controller from which all our Rails controllers inherit.
class ApplicationController < ActionController::Base
  include Pundit
  protect_from_forgery with: :exception

  rescue_from Pundit::NotAuthorizedError, with: :render_403

  def not_found
    render '404', status: 404
  end

  def render_403(exception)
    logger.warn "Authorization error: #{exception.inspect}"
    render 'not_authorized'
  end

  def after_sign_in_path_for(_user)
    listings_url
  end
end
