json.extract!(
    @screenshot,
    :title,
    :image_url,
    :id,
    :owner_id,
    :picture
)

json.comments do
  json.array! @screenshot.comments do |comment|
    json.extract!(comment, :author_id, :content, :parent_id, :id)
    json.author do
      json.extract!(comment.author, :username)
    end
  end
end

json.tags do
  json.array! @screenshot.tags do |tag|
    json.extract!(tag, :label, :id)
  end
end

json.game_tag do
  json.extract!(@screenshot.game_tag, :label, :id)
end
