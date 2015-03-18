class Api::TaggingsController < ApplicationController

  def create
    label = params[:tag][:label]
    label = label.downcase
    @tag = Tag.find_by(:label => label)
    if @tag
      @tagging = Tagging.new
      @tagging.tag_id = @tag.id
      @tagging.ss_id = params[:tag][:ss_id]
      if @tagging.save
        render json: @tag
      else
        render json: @tagging.errors.full_messages
      end
    else
      @tag = Tag.new(:label => label)

      Tag.transaction do
        Tagging.transaction do
          @tag.save
          @tagging = Tagging.new({:tag_id => @tag.id, :ss_id => params[:tag][:ss_id]})
          @tagging.save
        end
      end
      render json: @tag
    end
  end

end
