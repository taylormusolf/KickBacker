class Backing < ApplicationRecord
  validates :amount_pledged, :backer_id, :project_id, presence: true
  validates_uniqueness_of :backer_id, :scope => [:project_id]
  # validate :backing_amount_cannot_be_negative

  belongs_to :backer,
  foreign_key: :backer_id,
  class_name: :User

  belongs_to :project,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :reward,
  foreign_key: :reward_id,
  class_name: :Reward,
  optional: true


  # def backing_amount_cannot_be_negative
  #   if amount_pledged <= 0
  #     errors.add(:amount_pledged, 'pledge must be a positive number')
  #   end
  # end

  # def creator_cannot_be_backer
  #   if backer_id == Project.all[project_id].creator.id
  #     errors.add(:backer_id, 'creator cannot back own project')
  #   end
  # end




end
