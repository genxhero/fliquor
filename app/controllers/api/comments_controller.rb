class Api::CommentsController < ApplicationController

  def create
    comment = Comment.new(comment_params)
    comment.user_id = current_user.id
    comment.photo_id = params[:photo_id].to_i
    comment.save
    @photo = Photo.find(params[:photo_id].to_i)
  
    render "/api/photos/show"
  end

  def destroy
    comment = Comment.find(params[:id])
    @photo = Photo.find(comment.photo_id)
    comment.destroy
      render "/api/photos/show"
  end

  def comment_params
    params.require(:comment).permit(:body)
  end

end
