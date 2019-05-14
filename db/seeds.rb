# frozen_string_literal: true

if Group.count.zero?
  Group.create(
    name: 'San Mateo County',
    slug: 'smc',
    domain: 'herokuapp.com',
    group_type: :county,
  )
  Group.create(
    name: 'San Jose',
    slug: 'sj',
    domain: 'localhost',
  )
end

sample_listing_file = File.read 'lib/sample_data/sample_listings.json'
sample_listings = JSON.parse(sample_listing_file)
sample_listings.each do |l|
  Listing.create(l) unless Listing.exists?(listing_id: l['listing_id'])
end

if Rails.env.test?
  User.find_or_create_by(email: ENV['E2E_TEST_USER_EMAIL'] || 'test@domain.com') do |user|
    user.password = ENV['E2E_TEST_USER_PASSWORD'] || 'dc29b69cb66321f'
    user.group = Group.find_by_domain('localhost')
  end
end
