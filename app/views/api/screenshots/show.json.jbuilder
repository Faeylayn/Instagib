json.extract!(
    @screenshot,
    :title,
    :id,
    :owner_id
)

json.medium_url @screenshot.picture.url(:medium)

json.large_url @screenshot.picture.url(:large)

json.comments do
  json.array! @screenshot.comments do |comment|
    json.extract!(comment, :author_id, :content, :parent_id, :id)
    json.author do
      if comment.author_id
        json.extract!(comment.author, :username)
      else
        json.extract!(comment, :content)
      end
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

json.favorited_users do
  json.array! @screenshot.favorited_users do |user|
    json.extract!(user, :id)
    json.favorite_id do
      json.extract!(@screenshot.favorites.where(:user_id => user.id).first, :id)
    end
  end
end
