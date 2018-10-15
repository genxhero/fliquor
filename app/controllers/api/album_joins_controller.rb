class Api::AlbumJoinsController < ApplicationController

def create
  @AJ = AlbumJoin.new(album_join_params)
  if @AJ.save
    render json: {}
  else
    render json: @AJ.errors.full_messages, status: 422
  end
end

def destroy

end

def album_join_params
  params.require(:album_join).permit(:photo_id, :album_id)
end

end
