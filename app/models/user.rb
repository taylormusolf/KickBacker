class User < ApplicationRecord

  validates :username, :session_token, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token!
  attr_reader :password

  has_many :projects,
    foreign_key: :creator_id
  
  has_many :project_rewards,
    through: :projects,
    source: :rewards

  has_many :backings,
    foreign_key: :backer_id
  
  has_many :backed_projects,
    through: :backings,
    source: :project

  has_many :backed_rewards,
    through: :backings,
    source: :reward

  def self.find_by_crendentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom::urlsafe_base64
  end


end
