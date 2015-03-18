class Api::GameTaggingsController < ApplicationController

  def create

    label = params[:game_tag][:label]
    label = label.downcase
    @game_tag = Tag.find_by(:label => label)
    if @game_tag
      @game_tagging = Tagging.new
      @game_tagging.tag_id = @game_tag.id
      @game_tagging.ss_id = params[:game_tag][:ss_id]
      if @game_tagging.save
        render json: @game_tag
      else
        render json: @game_tagging.errors.full_messages
      end
    else
      @game_tag = Tag.new(:label => label)

      Tag.transaction do
        Tagging.transaction do
          @game_tag.save
          @game_tagging = Tagging.new({:game_tag_id => @game_tag.id, :ss_id => params[:game_tag][:ss_id]})
          @game_tagging.save
        end
      end
      render json: @game_tag

  end

end
