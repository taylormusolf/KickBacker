class Api::ProjectsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index

  end

  def show
    @project = Project.find_by(id: params[:id])
  end

  def create
    @project = Project.create!(project_params)
    render :show
  end

  def update

  end

  def destroy
    @project = current_user.projects.find_by(id: params[:id])
    if @project && @project.delete
      redirect_to :index
    end
  end


  private
  def project_params
    params.require(:project).permit(:title, :description, :campaign, :updates, :faq, :location, :start_date, :end_date, :funding_goal)
  end


end
