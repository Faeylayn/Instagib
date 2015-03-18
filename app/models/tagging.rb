class Tagging < ActiveRecord::Base



  belongs_to :tag,
      :class_name => "Tag",
      :foreign_key => :tag_id


  belongs_to :screenshot,
      :class_name => "Screenshot",
      :foreign_key => :ss_id
end
