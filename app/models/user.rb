# frozen_string_literal: true

# User class functions
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable
  devise  :trackable,
          :database_authenticatable,
          :registerable,
          :recoverable

  enum role: %i[admin superadmin]
  after_initialize :set_default_role, if: :new_record?

  belongs_to :group, required: false

  def group_and_descendants
    group.self_and_descendants
  end

  def set_default_role
    self.role ||= :admin
  end
end
