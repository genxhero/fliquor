class Api::AlbumsController < ApplicationController

  def index
    @albums =Album.all
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    # @album.thumbnail = @album.photos.first.image
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 420
    end
  end

  def album_params
    params.require(:album).permit(:title, :thumbnail)
  end

end

#On frontend, .photos.first.image will be passed as a param to thumbnail
