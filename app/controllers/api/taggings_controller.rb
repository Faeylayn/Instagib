class Api::TaggingsController < ApplicationController

  def create
    label = params[:tag][:label]
    label = label.downcase
    @tag = Tag.find_or_create_by(:label => label)
      @tagging = @tag.taggings.new(:ss_id => params[:tag][:ss_id])
      if @tagging.save
        render json: @tag
      else
        render json: @tagging.errors.full_messages
      end
    end

  def destroy
   @tagging = Tagging.find_by(:tag_id => params[:id], :ss_id => params[:ss_id])
   @tagging.destroy!
   render json: @tagging
  end

end
