class Api::CommentsController < ApplicationController
  def show

  end

  def index

  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy!
    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :content, :parent_id, :ss_id)

  end
end