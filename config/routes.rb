# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#home'

  resources :pattern_library, only: %w[index]

  # Devise routes
  devise_for :users
  as :user do
    root to: 'pages#home'
  end

  resources :listings, only: %w[index show new edit]

  # API namespacing
  namespace :api do
    namespace :v1 do
      resources :listings, only: %w[create update]
    end
  end
end
