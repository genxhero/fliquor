json.extract! album, :id, :user_id, :title, :thumbnail

if album.thumbnail.attached?
  json.image_url url_for(album.thumbnail)
else
  album.thumbnail.attach(io: File.open('app/assets/images/14355.svg'), filename: '14355.svg')
  json.image_url url_for(album.thumbnail)
end

 json.photos album.photos, partial: 'api/photos/photo', as: :photo
