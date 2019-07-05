class Api::FriendsController < ApplicationController

    def create
        @friend = Friend.new(friend_params)

        if @friend.save
            render "api/friends/show"
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def update
        @friend = Friend.find_by(friend_params)
        @friend.status = !@friend.status
        if @friend.save
            render "api/friends/show"
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(params[:id])
        @friend.destroy
    end
    

    private
    def friend_params
        params.require(:friend).permit(:user_one_id, :user_two_id, :status)
    end
end