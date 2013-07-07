class ProfilesController < ApplicationController

  # GET /profiles.json
  def index
    render json: Profile.all
  end

  # GET /profiles/1.json
  def show
    pf = Profile.find(params[:id])
    render json: pf
  end

  private
    def project_params
      params.require(:profile).permit(:name, :tools, :number)
    end
end