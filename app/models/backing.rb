class Backing < ApplicationRecord
  validates :amount_pledged, :backer_id, :project_id, :reward_id, presence: true

  belongs_to :backer,
  foreign_key: :backer_id,
  class_name: :User

  belongs_to :project,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :reward,
  foreign_key: :reward_id,
  class_name: :Reward

end
