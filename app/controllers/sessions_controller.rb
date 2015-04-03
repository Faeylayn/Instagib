class SessionsController < ApplicationController

  def guest
    session[:guest] = true
    render json: User.first
  end

  def create
    @user = User.find_by_credentials(params[:session][:username], params[:session][:password])
    if @user
      sign_in(@user)
      render json: @user
    else
      render json: 'That user/password combination does not exist', :status => :unprocessable_entity
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token!
      session[:token] = nil
      session[:guest] = false
      redirect_to root_url
    else
      redirect_to root_url
    end

  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
