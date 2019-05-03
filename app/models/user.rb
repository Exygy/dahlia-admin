# frozen_string_literal: true

# User class functions
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable
  devise  :omniauthable,
          :trackable,
          :database_authenticatable,
          :registerable,
          :recoverable

  enum role: [:admin]
  after_initialize :set_default_role, if: :new_record?

  belongs_to :group, required: false

  def group_and_descendants
    group.self_and_descendants
  end

  def self.from_omniauth(auth)
    user = User.where(provider: auth.provider, uid: auth.uid, email: auth.extra.username).first ||
           User.new
    user.provider = auth.provider
    user.uid = auth.uid
    user.salesforce_user_id = auth.extra.user_id
    user.email = auth.extra.username
    user.oauth_token = auth.credentials.token
    # have to do a separate lookup to grab the Salesforce AccountId
    service = Force::UserService.new(user)
    service.load_user
    user.salesforce_account_id = service.account_id
    user.admin = service.admin
    # always update oauth_token regardless of new_record or not
    user.oauth_token = auth.credentials.token
    user.save
    user
  end

  def set_default_role
    self.role ||= :admin
  end
end
