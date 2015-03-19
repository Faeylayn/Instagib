
  json.array! @search_results do |search_result|
    if search_result.searchable_type == "Screenshot"
      json.partial! "api/screenshots/screenshot", screenshot: search_result.searchable
      json._type "Screenshot"
      json.new_id search_result.searchable.id
    elsif search_result.searchable_type == "User"
      json.partial! "api/users/user", user: search_result.searchable
      json._type "User"
      json.new_id search_result.searchable.id
    else
      json.partial! "api/albums/album", album: search_result.searchable
      json._type "Album"
      json.new_id search_result.searchable.id
    end
  end
