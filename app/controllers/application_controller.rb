class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    return nil if session[:token].nil?
    @cu ||= User.find_by(:sessions_token => session[:token])
  end

  def sign_in(user)
    session[:token] = user.reset_session_token!
  end
end
