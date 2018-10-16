class Api::TagsController < ApplicationController

    def create
    end

    def index
      @tags = Tag.all
      render :index
    end

    def show
      @tag = Tag.find(params[:id])
      render :show
    end

end
