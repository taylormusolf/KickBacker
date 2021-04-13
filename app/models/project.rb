class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, :location, :start_date, :end_date, :funding_goal, :creator_id, :category_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User
  
  belongs_to :category,
    foreign_key: :category_id,
    class_name: :Category

  has_many :rewards,
    foreign_key: :project_id,
    class_name: :Reward

  has_many :backings,
    foreign_key: :project_id,
    class_name: :Backing

  has_many :backers,
    through: :backings,
    source: :backer

  has_one_attached :photo


  def self.convert_to_date(str)
    Date.new(((str[0..3])).to_i, ((str[5..6])).to_i, ((str[5..6])).to_i)
  end


end
