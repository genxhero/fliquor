json.extract! photo, :user_id, :title, :description

if photo.image.attached?
  json.image_url url_for(photo.image)
end
