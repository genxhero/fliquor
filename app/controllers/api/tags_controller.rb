class Api::TagsController < ApplicationController

    def create
    end

    def index
      @tags = Tag.all
      render :index
    end

    def show
      dummy = "you"
      @tag = Tag.find_by(title: params[:id])
      render :show
    end

end
