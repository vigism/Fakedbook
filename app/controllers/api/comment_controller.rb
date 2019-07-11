class Api::CommentController < ApplicationController

    def index
        @post = Post.find(params[:post_id])
        @comments = @post.comments
        render "api/comments/index"
    end

    def show
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status:422
        end
    end

    def destroy
    end

    private
    def comment_params
        params.require(:comment).permit(:content, :post_id,:author_id,:parent_comment_id)
    end
end