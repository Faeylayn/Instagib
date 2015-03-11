class UsersController < ApplicationController
  def show

  end

  def index

  end

  def new
    @user = User.new

  end

  def create
    @user = User.new(user_params)
    @user.password=(params[:user][:password])

    if @user.save
      sign_in(@user)
      redirect_to users_url
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
  def user_params
    params.require(:user).permit(:username, :email, :password_digest, :session_token)
  end
end
