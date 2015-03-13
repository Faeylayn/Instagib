class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :session_token, :password_digest, :email, uniqueness: true

  before_validation :ensure_session_token

  has_many(
  :albums,
  class_name: "Album",
  primary_key: :id,
  foreign_key: :owner_id
  )

  has_many(
  :screenshots,
  class_name: "Screenshot",
  primary_key: :id,
  foreign_key: :owner_id
  )

  def self.find_by_credentials(username, password)
    user = User.find_by(:username => username)
    if user
      if user.is_password?(password)
        return user
      end
    end
    nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64

  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token

  end

  def password=(value)
    @password = value
    self.password_digest = BCrypt::Password.create(value)

  end

  def is_password?(password)
    pass = BCrypt::Password.new(self.password_digest)
    pass.is_password?(password)

  end
end
