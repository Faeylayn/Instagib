class Favorite < ActiveRecord::Base

  belongs_to :user

  belongs_to :screenshot,
    class_name: "Screenshot",
    foreign_key: :ss_id
    
end
