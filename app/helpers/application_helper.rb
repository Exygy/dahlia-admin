# frozen_string_literal: true

# View helpers
module ApplicationHelper
  def active_path(test_path)
    request.fullpath == test_path ? 'active' : ''
  end
end
