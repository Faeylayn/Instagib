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
