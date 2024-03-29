class Api::SessionsController < ApplicationController
  def create
    @user = User.includes({projects: [:backings, {photo_attachment: :blob}]}, {backings: [:reward, {project: {photo_attachment: :blob}}]})
      .find_by_crendentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render 'api/users/show'
    else
      render json: ["No one is signed in"], status: 404
    end
  end
end

