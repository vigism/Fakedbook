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

    #Get all posts by user and posts on the user's profile
    def allUserPosts
        user_id = params[:id]
        userPosts = Post.where(author_id: user_id).to_a
        receivedPost = Post.where(profile_id: user_id).to_a
        if userPosts == nil && receivedPost == nil
            @posts = []
        elsif userPosts == nil
            @posts = receivedPost
        elsif receivedPost == nil
            @posts = userPosts
        else
            @posts = userPosts.concat(receivedPost)
        end

        render "api/posts/index"
    end

    private
    def post_params
        params.require(:post).permit(:author_id, :profile_id, :content)
    end
end