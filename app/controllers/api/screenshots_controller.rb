class Api::ScreenshotsController < ApplicationController
    def show
      @screenshot = Screenshot.find(params[:id])
    end

    def index

    end

    def new
      @image = Screenshot.new
    end

    def create
      @screenshot = Screenshot.new(screenshot_params)
      @screenshot.owner_id = current_user.id
      if @screenshot.save
        render :show
      # else
      #   render :json {@screenshot.errors.full_messages}
      end

    end

    def update
      @screenshot = Screenshot.find(params[:id])
      if @screenshot.update(screenshot_params)
        render :show
      # else
      #   render :json {@screenshot.errors.full_messages}
      end
    end

    def destroy

    end

    private
    def screenshot_params
      params.require(:screenshot).permit(:title, :image_url, :album_id)
    end
end
