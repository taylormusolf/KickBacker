class Api::RewardsController < ApplicationController

  def index
    @rewards = Reward.all
    render :index
  end

  def show
    @reward = Reward.find_by(id: params[:id])
    render :show
  end

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end

  end

  def destroy
    @reward = current_user.project_rewards.find_by(id: params[:id])
    if @reward && @reward.delete
    else
      render json: ["Unable to delete reward"], status: 422  
    end
  end

  private

  def reward_params
    params.require(:reward).permit(:title, :description, :project_id, :cost)
  end

end
