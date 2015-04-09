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
      @message = Message.new(message_params)
      @message.received = false
      if @message.save
        render json: @message
      else
        render json: @message.errors.full_messages, :status => :unprocessable_entity
      end
    end

  def destroy

  end

  private

  def message_params
    params.require(:message).permit(:sender_id, :receiver_id, :title, :body)
  end

end
