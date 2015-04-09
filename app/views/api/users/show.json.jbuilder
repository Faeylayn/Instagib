json.extract!(
  @user,
  :id,
  :username,
  :email,
)

json.medium_url @user.picture.url(:medium)

json.albums do
  json.array! @user.albums do |album|
    json.extract!(album, :id, :owner_id, :title)
  end
end

json.followers do
  json.array! @user.followers do |follower|
    json.extract!(follower, :id, :username)
    json.thumb_url follower.picture.url(:thumb)

    json.following_id do
      json.extract!(@user.followeding.where(:follower_id => follower.id).first, :id)
    end
  end
end

json.followeds do
  json.array! @user.followeds do |followed|
    json.extract!(followed, :id, :username)
    json.thumb_url followed.picture.url(:thumb)
  end
end

json.favorites do
  json.array! @user.favorite_ss do |ss|
    json.extract!(ss, :id, :title)
    json.thumb_url ss.picture.url(:thumb)
    json.favorite_id do
      json.extract!(@user.favorites.where(:ss_id => ss.id).first, :id)
    end

  end
end
