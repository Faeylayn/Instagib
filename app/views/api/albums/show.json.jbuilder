json.extract!(
  @album,
  :title,
  :id,
  :owner_id
)

json.screenshots do
  json.array! @album.screenshots do |screenshot|
    json.extract!(screenshot, :title, :image_url, :id, :owner_id, :picture)
  end

end

json.owners_stuff do
  json.array! @album.owner.screenshots do |screenshot|
    json.extract!(screenshot, :title, :image_url, :id, :album_id, :picture)
  end
end
