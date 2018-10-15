json.extract! album, :id, :user_id, :title, :description



json.user album.user, partial: 'api/users/user', as: :user
json.photos album.photos, partial: 'api/photos/photo', as: :photo
