class Album < ActiveRecord::Base

  has_many :screenshots
  belongs_to(
  :owner,
  class_name: "User",
  primary_key: :id,
  foreign_key: :owner_id
  )
end
