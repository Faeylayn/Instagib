json.array! @screenshots do |screenshot|
  json.extract!(
      screenshot,
      :title,
      :image_url,
      :id,
      :owner_id,
      :picture,
      :created_at
  )
end
