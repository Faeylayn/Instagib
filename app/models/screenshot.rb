class Screenshot < ActiveRecord::Base
  validates :title, :owner_id, presence: true


  include PgSearch
  multisearchable :against => :title
  has_attached_file :picture, :default_url => ActionController::Base.helpers.asset_path("No_Image.jpg")
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

  belongs_to(
  :album,
  class_name: "Album",
  primary_key: :id,
  foreign_key: :album_id
  )

  belongs_to(
  :owner,
  class_name: "User",
  primary_key: :id,
  foreign_key: :owner_id
  )

  has_many(
    :comments,
    :class_name => "Comment",
    :primary_key => :id,
    :foreign_key => :ss_id
  )

  has_many :taggings,
      :class_name => "Tagging",
      :foreign_key => :ss_id

  has_many :tags, :through => :taggings, :source => :tag

  has_one :game_tagging,
      :class_name => "GameTagging",
      :foreign_key => :ss_id

  has_one :game_tag, :through => :game_tagging, :source => :game_tag
end
