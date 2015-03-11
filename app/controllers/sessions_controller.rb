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

  def destroy
    if current_user
      current_user.reset_session_token!
      session[:token] = nil
      redirect_to root_url
    else
      redirect_to new_session_url
    end

  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
