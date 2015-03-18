class Api::GameTaggingsController < ApplicationController

  def create

    label = params[:game_tag][:label]
    label = label.downcase
    @game_tag = Tag.find_or_create_by(:label => label)
      @game_tagging = @game_tag.taggings.new(:ss_id => params[:game_tag][:ss_id])
      if @game_tagging.save
        render json: @game_tag
      else
        render json: @game_tagging.errors.full_messages
      end
  end

end
