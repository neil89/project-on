class ProjectsController < ApplicationController

  # GET /project.json
  def index
    render json: Project.all
  end

  # GET /projects/1.json
  def show
    p = Project.find(params[:id])
    render json: p
  end

  # POST /projects.json
  def create
    p = Project.new(params[:project])

    if p.save!
      render json: p, status: :created
    else
      render json: p.errors, status: :unprocessable_entity
    end

    p.reload
  end

  # PUT /projects/1.json
  def update
    p = Project.find(params[:id])
    if p.update_attributes(params[:project])
      render json: p, status: :ok
    else
      render json: p.errors, status: :unprocessable_entity
    end
  end

  # DELETE /contacts/1.json
  def destroy
    p = Project.find(params[:id])
    p.destroy
    render json: nil, status: :ok
  end
end