class ProjectTeamsController < ApplicationController

  # GET /projectTeam.json
  def index
    render json: ProjectTeam.all
  end

  # GET /projectTeam/1.json
  def show
    pjt = ProjectTeam.find(params[:id])
    render json: pjt
  end

  #POST /projectTeams.json
  def create 
    pjt = ProjectTeam.new(params[:project_team])

    if pjt.save!
      render json: p, status: :created
    else
      render json: p.errors, status: :unprocessable_entity
    end

    pjt.reload
  end
end