class Api::ProjectsController < ApplicationController
  before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.find_by(id: params[:id])
    render :show
  end

  def create
    @project = Project.new(project_params)
    if project_params[:start_date] != '' && project_params[:end_date] != ''
      start_date = Project.convert_to_date(project_params[:start_date])
      @project.start_date = start_date
      end_date = Project.convert_to_date(project_params[:end_date])
      @project.end_date = end_date
      if @project.save
        render :show
      else
        render json: @project.errors.full_messages, status: 422
      end
    else
      render json: ['Date not correctly entered'], status: 422
    end
    

  end

  def update
    @project = current_user.projects.find_by(id: params[:id])
    if @project && @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = current_user.projects.find_by(id: params[:id])
    if @project && @project.delete
    else
      render json: ["Unable to delete project"], status: 422  
    end
  end


  private

  def project_params
    params.require(:project).permit(:title, :description, :campaign, :updates, :faq, :location, :start_date, :end_date, :funding_goal, :creator_id)
  end


end
