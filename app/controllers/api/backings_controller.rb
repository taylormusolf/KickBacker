class Api::BackingsController < ApplicationController

  def index
    @backings = Backing.all
    render :index
  end

  def show
    @backing = Backing.find_by(id: params[:id])
    render :show
  end

  def create
    @backing = Backing.new(backing_params)
    if @backing.save
      render :show
    else
      render json: @backing.errors.full_messages, status: 422
    end

  end

  def destroy
    @backing = current_user.backings.find_by(id: params[:id])
    if @backing && @backing.delete
    else
      render json: ["Unable to delete backing"], status: 422  
    end
  end

  private

  def backing_params
    params.require(:backing).permit(:amount_pledged, :backer_id, :project_id, :reward_id)
  end


end
