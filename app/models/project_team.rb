# == Schema Information
#
# Table name: project_teams
#
#  id          :integer          not null, primary key
#  coworker_id :integer
#  project_id  :integer
#

class ProjectTeam < ActiveRecord::Base
  belongs_to :coworker,
    foreign_key: "coworker_id",
    class_name: "Person"
  belongs_to :project,
    foreign_key: "project_id",
    class_name: "Project"
end
