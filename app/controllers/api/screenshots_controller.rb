class Api::ScreenshotsController < ApplicationController
    def show
      @screenshot = Screenshot.includes(:comments, :game_tag).find(params[:id])
    end

    def index
      @screenshots = Screenshot.all
    end

    def homefeed
      @screenshots = Screenshot.all.order(created_at: :desc).limit(4)
      render :index
    end

    def new
      @image = Screenshot.new
    end

    def create
      @screenshot = current_user.screenshots.new(screenshot_params)
      @screenshot.picture = params[:screenshot][:picture]
      label = params[:screenshot][:game_tag][:label]
      label = label.downcase
      game_tag = GameTag.find_or_create_by(:label => label)
      @screenshot.build_game_tagging(:game_tag_id => game_tag.id )

      if @screenshot.save
        push_ss(@screenshot)
        render :show
      else
        render json: @screenshot.errors.full_messages
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
