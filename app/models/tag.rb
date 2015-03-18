class Tag < ActiveRecord::Base
  validates :label, presence: true

  has_many :taggings,
      :class_name => "Tagging",
      :foreign_key => :tag_id

  has_many :screenshots, :through => :taggings, :source => :screenshot
end
