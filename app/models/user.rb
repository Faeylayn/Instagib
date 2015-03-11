class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :session_token, :password_digest, :email, uniqueness: true


end
