json.extract!(
  @user,
  :id,
  :username,
  :email,
  :picture
)

json.albums do
  json.array! @user.albums do |album|
    json.extract!(album, :id, :owner_id, :title)
  end
end

json.followers do
  json.array! @user.followers do |follower|
    json.extract!(follower, :id, :username, :picture)
  end
end

json.followeds do
  json.array! @user.followeds do |followed|
    json.extract!(followed, :id, :username, :picture)
  end
end
