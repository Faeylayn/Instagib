class Api::FollowingsController < ApplicationController

  def create
    following = Following.new(follower_id: params[:follower_id], followed_id: params[:followed_id])
    if following.save
      render json: following
    else
      render json: following.errors.full_messages
    end
  end

  def destroy
    following = Following.find(params[:id])
    following.destroy!
    head :ok
  end

end
