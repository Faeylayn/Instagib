class Screenshot < ActiveRecord::Base

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
end
