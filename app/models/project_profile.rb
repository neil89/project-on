# == Schema Information
#
# Table name: project_profiles
#
#  id         :integer          not null, primary key
#  project_id :integer
#  profile_id :integer
#

class ProjectProfile < ActiveRecord::Base
  belongs_to :project,
    foreign_key: "project_id",
    class_name: "Project"
  belongs_to :profile,
    foreign_key: "profile_id",
    class_name: "Profile"
end
