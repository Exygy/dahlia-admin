# frozen_string_literal: true

namespace :e2e_seed_data do
  desc 'Add seed data to the local DB for e2e testing'
  task install: :environment do
    User.find_or_create_by(email: ENV['E2E_TEST_USER_EMAIL'] || 'test@domain.com') do |user|
      user.password = ENV['E2E_TEST_USER_PASSWORD'] || 'dc29b69cb66321f'
    end
  end
end
