class GameTag < ActiveRecord::Base


  has_many :game_taggings,
      :class_name => "GameTagging",
      :foreign_key => :game_tag_id

  has_many :screenshots, :through => :game_taggings, :source => :screenshot
end
