class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])
  end

  def create
    @album = Album.new(album_params)
    @album.owner_id = current_user.id
    if @album.save
      render :show
    else
    #  render :json @album.errors.full_messages
    end
  end


  private
  def album_params
    params.require(:album).permit(:title)

  end
end
