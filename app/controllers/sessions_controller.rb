class SessionsController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    redirect_to root_url
  end


end
