class Api::ProjectsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.find_by(id: params[:id])
    render :show
  end

  def create
    @project = Project.create!(project_params)
    render :show
  end

  def update
    @project = current_user.projects.find_by(id: params[:id])
    if @project && @project.update(project_params)
      render :show
    else
      render :show
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
