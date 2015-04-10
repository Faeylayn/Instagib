json.array! @screenshots do |screenshot|
  json.extract!(
      screenshot,
      :title,
      :id,
      :owner_id,
      :created_at
  )

  json.thumb_url screenshot.picture.url(:medium)

  json.owner screenshot.owner.username
end
