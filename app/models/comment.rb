class Comment < ActiveRecord::Base


  belongs_to(
    :screenshot,
    :class_name => "Screenshot",
    :primary_key => :id,
    :foreign_key => :ss_id
  )

  belongs_to(
    :author,
    :class_name => "User",
    :primary_key => :id,
    :foreign_key => :author_id
  )
end
