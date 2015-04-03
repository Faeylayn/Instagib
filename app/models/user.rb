class User < ActiveRecord::Base
  attr_reader :password

  include PgSearch
  multisearchable :against => :username
  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :password_digest, :email, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  validates_format_of :username, :password, with: /\A[a-z\d]*\Z/i, :on => :create
  validates :password, length: {minimum: 6, :allow_nil => true}

  before_validation :ensure_session_token

  has_attached_file :picture, :styles => { :medium => "300x300>", :thumb => "100x100>", :tiny => "50x50>" }, :default_url => ActionController::Base.helpers.image_path("No_Image.jpg")
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/


  # "https://s3.amazonaws.com/instagib/images/users/No_Image.jpg"
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

  has_many(
    :comments,
    :class_name => "Comment",
    :primary_key => :id,
    :foreign_key => :author_id
  )

  has_many(
    :followering,
    :class_name => "Following",
    :foreign_key => :follower_id
  )

  has_many :followeds, :through => :followering, :source => :followed

  has_many(
    :followeding,
    :class_name => "Following",
    :foreign_key => :followed_id
  )

  has_many :followers, :through => :followeding, :source => :follower

  has_many :favorites

  has_many :favorite_ss, :through => :favorites, :source => :screenshot

  has_many :mail,
    :class_name => "Message",
    :foreign_key => :receiver_id

  has_many :sent_mail,
  :class_name => "Message",
  :foreign_key => :sender_id

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
