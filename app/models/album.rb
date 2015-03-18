class Album < ActiveRecord::Base
  validates :title, :owner_id, presence: true

  include PgSearch
  multisearchable :against => :title

  has_many :screenshots
  belongs_to(
  :owner,
  class_name: "User",
  primary_key: :id,
  foreign_key: :owner_id
  )
end
