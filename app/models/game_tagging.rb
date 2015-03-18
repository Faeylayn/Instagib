class GameTagging < ActiveRecord::Base



  belongs_to :game_tag,
      :class_name => "GameTag",
      :foreign_key => :game_tag_id


  belongs_to :screenshot,
      :class_name => "Screenshot",
      :foreign_key => :ss_id
end
