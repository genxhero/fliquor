
json.photo do
  json.partial! "api/photos/photo", photo: @photo
end

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.body comment.body
      json.user_id comment.user_id
  #    debugger
      # json.username comment.user.username
      json.user comment.user
    end
  end
end
