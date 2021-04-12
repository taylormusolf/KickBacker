class Reward < ApplicationRecord
  validates :title, :description, :project_id, :cost, presence: true
end
