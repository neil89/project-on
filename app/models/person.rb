# == Schema Information
#
# Table name: people
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  place        :string(255)
#  email        :string(255)
#  password     :string(255)
#  academic     :string(255)
#  professional :string(255)
#  knowledge    :string(255)
#  icon_url     :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Person < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true

  ###################################################################
  ## RELACIÓN N:N PARA FRIENDS - TABLA DE REUNIÓN: FRIENDSHIP      ##
  ###################################################################
  has_many :friendships, 
    foreign_key: "person_id", 
    class_name: "Friendship"
  has_many :friends, 
    through: :friendships


  ###################################################################
  ## RELACIÓN 1:N PARA CREATOR                                     ##
  ###################################################################
  has_many :projects_created,
    foreign_key: "creator_id",
    class_name: "Project",
    dependent: :destroy

  ###################################################################
  ## RELACIÓN N:N PARA COWORKERS - TABLA DE REUNIÓN: PROJECT_TEAM  ##
  ###################################################################
  has_many :project_teams,
    foreign_key: "coworker_id",
    class_name: "ProjectTeam"
  has_many :projects,
    through: :project_teams

  ###################################################################
  ## RELACIÓN N:N PARA PROFILES - TABLA DE REUNIÓN: PEOPLE_PROFILE ##
  ###################################################################
  has_many :people_profiles,
    foreign_key: "person_id",
    class_name: "PeopleProfile"
  has_many :profiles,
    through: :people_profiles
end
