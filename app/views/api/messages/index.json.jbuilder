json.array! @messages do |message|
  json.extract!(message, :id, :title, :sender_id, :received, :created_at)
  json.sender message.sender.username
end
