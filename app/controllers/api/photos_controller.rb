class Api::PhotosController < ApplicationController
    def show
      
       @photo = Photo.find(params[:id].to_i)
      render :show
    end

    def create

      @photo = Photo.new(photo_params)
      @photo.user_id = current_user.id

      tags_arr = params[:photo][:tag_ids].split(', ');
      tag_ids = @photo.parse_tags(tags_arr)
      if @photo.save
      #  @photo.tag_ids = tag_ids

        tag_ids.each do |tag_id|
          tj = TagJoin.new(photo_id: @photo.id, tag_id: tag_id)
          tj.save
        end
        render :show
      else
        render json: @photo.errors.full_messages, status: 420
      end
    end

    def index
      @photos = Photo.all
      render :index
    end

    def update

      @photo = Photo.find(params[:id].to_i)

      tags_arr = params[:photo][:tag_ids].split(', ')

      tag_ids = @photo.parse_tags(tags_arr)

      @photo.tag_ids = tag_ids
#Might not work based on placement of tag_ids = tag_ids
      if @photo.update_attributes(photo_params)

       render :show
      else
        render jason: @photo.errors.full_messages, status: 422
      end
    end

    def destroy
      @photo = Photo.find(params[:id])
      Photo.destroy(@photo.id)
      render :show
    end

    def photo_params
     params.require(:photo).permit(:title, :description, :image, tag_ids: [])
    #  params.require(:photo).permit(:title, :description, :image, :tag_ids)

    end
end
