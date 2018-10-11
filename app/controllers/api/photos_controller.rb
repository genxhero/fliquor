class Api::PhotosController < ApplicationController
    def show
      @photo = Photo.find(1)
      render :show
    end
end
