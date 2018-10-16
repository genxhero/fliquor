json.extract! tag, :id, :title

json.photos tag.photos, partial: 'api/photos/photo', as: :photo
