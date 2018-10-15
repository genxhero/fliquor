json.extract! photo, :id, :user_id, :title, :description

if photo.image.attached?
  json.image_url url_for(photo.image)
end

 json.user photo.user, partial: 'api/users/user', as: :user
 # json.albums photo.albums, partial: `api/albums/album`, as: :album
