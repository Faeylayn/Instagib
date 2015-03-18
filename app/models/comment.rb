class Comment < ActiveRecord::Base
  validates :content, presence: true
  validates :content, length: {maximum: 140}

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

  belongs_to(
    :parent,
    :class_name => "Comment",
    :primary_key => :id,
    :foreign_key => :parent_id
  )


  has_many(
    :children,
    :class_name => "Comment",
    :primary_key => :id,
    :foreign_key => :parent_id
  )
end
