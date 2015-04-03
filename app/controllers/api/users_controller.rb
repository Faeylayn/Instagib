class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def new
    @user = User.new
    render "users/new.html.erb"
  end

  def create
    @user = User.new(user_params)
    @user.password=(params[:user][:password])

    if @user.save
      sign_in(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, :status => :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, :status => :unprocessable_entity
    end
  end

  def destroy

  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password_digest, :session_token, :picture)
  end
end
