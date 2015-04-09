class Api::MessagesController < ApplicationController

  def index
    @messages = current_user.mail
  end

  def show
    @message = Message.find(params[:id])
  end

  def update
    message = Message.find(params[:id])
    if message.update(:received => true)
      render json: message
    else
      render json: message.errors.full_messages
    end
  end

  def create
      @message =
      if @message.save
        render json: @message
      else
        render json: @message.errors.full_messages
      end
    end

  def destroy
   @tagging = Tagging.find_by(:tag_id => params[:id], :ss_id => params[:ss_id])
   @tagging.destroy!
   render json: @tagging
  end

end
