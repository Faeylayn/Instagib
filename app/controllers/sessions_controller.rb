class SessionsController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:session][:username], params[:session][:password])
    if @user
      sign_in(@user)
      redirect_to root_url
    else
      @user = User.new
      render :new
    end
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
