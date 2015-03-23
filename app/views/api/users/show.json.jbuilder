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

    json.following_id do
      json.extract!(@user.followeding.where(:follower_id => follower.id).first, :id)
    end
  end
end

json.followeds do
  json.array! @user.followeds do |followed|
    json.extract!(followed, :id, :username, :picture)
  end
end

json.favorites do
  json.array! @user.favorite_ss do |ss|
    json.extract!(ss, :id, :title, :picture)
    json.favorite_id do
      json.extract!(@user.favorites.where(:ss_id => ss.id).first, :id)
    end

  end
end

json.new_mail do
  json.array! @user.mail.where(:received => false) do |mail|
    json.extract!(mail, :id, :title)
    json.sender do
      json.extract!(mail.sender, :id, :username)
    end
  end
end

json.mail do
  json.array! @user.mail do |mail|
    json.extract!(mail, :id, :title)
    json.sender do
      json.extract!(mail.sender, :id, :username)
    end
  end
end
