class Tag < ActiveRecord::Base


  has_many :taggings,
      :class_name => "Tagging",
      :foreign_key => :tag_id

  has_many :screenshots, :through => :taggings, :source => :screenshot
end
