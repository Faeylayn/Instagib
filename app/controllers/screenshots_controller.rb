class ScreenshotsController < ApplicationController
    def show
      @image = Screenshot.find(params[:id])
    end

    def index

    end

    def new
      @image = Screenshot.new
    end

    def create
      @image = Screenshot.new(screenshot_params)
      @image.owner_id = current_user.id
      if @image.save
        redirect_to screenshot_url(@image)
      else
        render :new
      end

    end

    def edit

    end

    def update

    end

    def destroy

    end

    private
    def screenshot_params
      params.require(:screenshot).permit(:title, :image_url)
    end
end
