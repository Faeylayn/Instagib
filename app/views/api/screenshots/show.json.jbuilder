json.extract!(
    @screenshot,
    :title,
    :image_url,
    :id,
    :owner_id
)

json.comments do
  json.array! @screenshot.comments do |comment|
    json.extract!(comment, :author_id, :content, :parent_id, :id)
    json.author do
      json.extract!(comment.author, :username)
    end
  end
end
