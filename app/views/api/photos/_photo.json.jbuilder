json.extract! photo, :id, :user_id, :title, :description, :tags, :tagjoins, :album_ids

if photo.image.attached?
  json.image_url url_for(photo.image)
end

 json.user photo.user, partial: 'api/users/user', as: :user

 # if photo.albums.length > 0
 #   json.albums photo.albums, partial: `api/albums/album`, as: :album
 # end
