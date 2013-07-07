# == Schema Information
#
# Table name: projects
#
#  id            :integer          not null, primary key
#  title         :string(255)
#  starting_date :date
#  ending_date   :date
#  description   :string(255)
#  creator_id    :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Project < ActiveRecord::Base

  #attr_accessible :title, :startingDate, :endingDate, :description, :creator_id
  validates :title, presence: true
  #validates :creator_id, presence: true
  #validates :starting_date, presence: true

  ###################################################################
  ## RELACIÓN 1:N PARA CREATOR                                     ##
  ###################################################################
  belongs_to :creator,
    foreign_key: "creator_id",
    class_name: "Person"

  accepts_nested_attributes_for :creator

  ###################################################################
  ## RELACIÓN N:N PARA COWORKERS - TABLA DE REUNIÓN: PROJECT_TEAM  ##
  ###################################################################
  has_many :project_teams,
    foreign_key: "project_id",
    class_name: "ProjectTeam"
  has_many :coworkers,
    through: :project_teams

  ####################################################################
  ## RELACIÓN N:N PARA PROFILES - TABLA DE REUNIÓN: PROJECT_PROFILE ##
  ####################################################################
  has_many :project_profiles,
    foreign_key: "project_id",
    class_name: "ProjectProfile"
  has_many :profiles,
    through: :project_profiles

end
