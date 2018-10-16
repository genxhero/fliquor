class Api::TagJoinsController < ApplicationController

  def destroy
    @tj = TagJoin.find(params[:id])

    @redirect = @tj.photo_id
    @tj.destroy
    @photo = Photo.find(@redirect)
    render "/api/photos/show"
  end
end
