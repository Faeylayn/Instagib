class Screenshot < ActiveRecord::Base

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

  has_many :game_taggings,
      :class_name => "Tagging",
      :foreign_key => :ss_id

  has_one :game_tag, :through => :game_taggings, :source => :game_tag
end
