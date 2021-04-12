class Backing < ApplicationRecord
  validates :amount_pledged, :backer_id, :project_id, :reward_id, presence: true
end
