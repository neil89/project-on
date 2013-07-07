# == Schema Information
#
# Table name: people_profiles
#
#  id         :integer          not null, primary key
#  person_id  :integer
#  profile_id :integer
#

class PeopleProfile < ActiveRecord::Base
  belongs_to :person,
    foreign_key: "person_id",
    class_name: "Person"
  belongs_to :profile,
    foreign_key: "profile_id",
    class_name: "Profile"
end
