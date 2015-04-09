
json.extract!(@message, :id, :title, :sender_id, :receiver_id, :received, :created_at)
json.sender @message.sender.username
json.receiver @message.receiver.username
