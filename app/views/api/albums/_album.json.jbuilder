json.extract! album, :id, :user_id, :title, :description

if album.thumbnail.attached?
  json.image_url url_for(album.thumbnail)
else
  album.thumbnail.attach(io: File.open('app/assets/images/14355.svg'), filename: '14355.svg')
  json.image_url url_for(album.thumbnail)
end

json.user album.user, partial: 'api/users/user', as: :user
json.photos album.photos, partial: 'api/photos/photo', as: :photo
