class PeopleController < ApplicationController

  # GET /people.json
  def index
    render json: Person.all
  end

  # GET /people/1.json
  def show
    p = Person.find(params[:id])
    render json: p
  end

  # POST /people.json
  def create
    #@person = Person.create(person_params)
    p = Person.new
    render json: p
  end


  private
    # def person_params
    #   params.require(:person).permit(:name, 
    #                                  :place, 
    #                                  :academic, 
    #                                  :professional, 
    #                                  :knowledge, 
    #                                  :iconUrl)
    # end
    
    
end