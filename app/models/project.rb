class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, :location, :start_date, :end_date, :funding_goal, :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User


  



end
