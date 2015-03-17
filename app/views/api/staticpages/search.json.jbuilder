json.results do
  # json.array! @search_results do |search_result|
  #   if search_result.searchable_type == "Screenshot"
  #     json.partial! "api/screenshots/screenshot", post: search_result.searchable
  #     json._type "Screenshot"
  #   elsif search_result.searchable_type == "User"
  #     json.partial! "api/users/user", user: search_result.searchable
  #     json._type "User"
  #   else
  #     json.partial! "api/albums/album", user: search_result.searchable
  #     json._type "Album"
  #   end
  # end

end
