class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    # @album.thumbnail = @album.photos.first.image
    debugger;
    if @album.save
      @album.photo_ids.each do |photo_id|
          aj = AlbumJoin.new(album_id: @album.id, photo_id: photo_id)
          aj.save
      end
      render :show
    else
      render json: @album.errors.full_messages, status: 420
    end
  end



  def album_params
    params.require(:album).permit(:title, :thumbnail, photo_ids: [])
  end

end

#On frontend, .photos.first.image will be passed as a param to thumbnail
