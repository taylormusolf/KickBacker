class Reward < ApplicationRecord
  validates :title, :description, :project_id, :cost, presence: true

  belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project

  has_many :backings,
    foreign_key: :reward_id,
    class_name: :Backing

  has_many :backers,
    through: :backings,
    source: :backer

end
