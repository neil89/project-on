# == Schema Information
#
# Table name: profiles
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  tools      :string(255)
#  number     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Profile < ActiveRecord::Base
  validates :name, presence: true

  ###################################################################
  ## RELACIÓN N:N PARA PROFILES - TABLA DE REUNIÓN: PEOPLE_PROFILE ##
  ###################################################################
  has_many :people_profiles,
    foreign_key: "profile_id",
    class_name: "PeopleProfile"
  has_many :people,
    through: :people_profiles


  ####################################################################
  ## RELACIÓN N:N PARA PROFILES - TABLA DE REUNIÓN: PROJECT_PROFILE ##
  ####################################################################
  has_many :project_profiles,
    foreign_key: "profile_id",
    class_name: "ProjectProfile"
  has_many :projects,
    through: :project_profiles
end
