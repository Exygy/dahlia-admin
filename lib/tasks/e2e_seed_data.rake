# frozen_string_literal: true

namespace :e2e_seed_data do
  desc 'Add seed data to the local DB for e2e testing'
  task install: :environment do
    User.find_or_create_by(email: 'test@domain.com') do |user|
      user.password = 'dc29b69cb66321f'
    end
  end
end
