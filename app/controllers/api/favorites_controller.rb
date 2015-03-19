class Api::FavoritesController < ApplicationController

  def create
    fav = Favorite.new(ss_id: params[:ss_id], user_id: params[:user_id])
    if fav.save
      render json: fav
    else
      render json: fav.errors.full_messages
    end
  end

  def destroy
    fav = Favorite.find(params[:id])
    fav.destroy!
    head :ok
  end

end
