class Api::PostController < ApplicationController

    def index

    end

    def create
        @post = Post.new(post_params)

        if @post.save
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def show
        @post = Post.find(params[:id])
        render "api/posts/show"
    end

    private
    def post_params
        params.require(:post).permit(:author_id, :profile_id, :content)
    end
end