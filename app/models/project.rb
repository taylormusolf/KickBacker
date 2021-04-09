class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, :location, :start_date, :end_date, :funding_goal, :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_one_attached :photo


  def self.convert_to_date(str)
    Date.new(((str[0..3])).to_i, ((str[5..6])).to_i, ((str[5..6])).to_i)
  end


end
