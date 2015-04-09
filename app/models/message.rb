class Message < ActiveRecord::Base

  validates :title, :body, :sender_id, :receiver_id, presence: true

  belongs_to :sender,
    :class_name => "User",
    :foreign_key => :sender_id

  belongs_to :receiver,
    :class_name => "User",
    :foreign_key => :receiver_id


end
