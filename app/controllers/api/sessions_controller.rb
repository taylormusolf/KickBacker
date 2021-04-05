class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_crendentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    if !current_user
      render json: {}, status: 404
    else
      logout!
      render json: {}
    end
  end
end

