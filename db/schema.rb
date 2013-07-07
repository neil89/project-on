# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130704125600) do

  create_table "friendships", :force => true do |t|
    t.integer "person_id"
    t.integer "friend_id"
  end

  add_index "friendships", ["friend_id"], :name => "index_friendships_on_friend_id"
  add_index "friendships", ["person_id", "friend_id"], :name => "index_friendships_on_person_id_and_friend_id"
  add_index "friendships", ["person_id"], :name => "index_friendships_on_person_id"

  create_table "people", :force => true do |t|
    t.string   "name"
    t.string   "place"
    t.string   "email"
    t.string   "password"
    t.string   "academic"
    t.string   "professional"
    t.string   "knowledge"
    t.string   "icon_url"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "people_profiles", :force => true do |t|
    t.integer "person_id"
    t.integer "profile_id"
  end

  add_index "people_profiles", ["person_id", "profile_id"], :name => "index_people_profiles_on_person_id_and_profile_id"
  add_index "people_profiles", ["person_id"], :name => "index_people_profiles_on_person_id"
  add_index "people_profiles", ["profile_id"], :name => "index_people_profiles_on_profile_id"

  create_table "profiles", :force => true do |t|
    t.string   "name"
    t.string   "tools"
    t.integer  "number"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "project_profiles", :force => true do |t|
    t.integer "project_id"
    t.integer "profile_id"
  end

  add_index "project_profiles", ["profile_id"], :name => "index_project_profiles_on_profile_id"
  add_index "project_profiles", ["project_id", "profile_id"], :name => "index_project_profiles_on_project_id_and_profile_id"
  add_index "project_profiles", ["project_id"], :name => "index_project_profiles_on_project_id"

  create_table "project_teams", :force => true do |t|
    t.integer "coworker_id"
    t.integer "project_id"
  end

  add_index "project_teams", ["coworker_id", "project_id"], :name => "index_project_teams_on_coworker_id_and_project_id"
  add_index "project_teams", ["coworker_id"], :name => "index_project_teams_on_coworker_id"
  add_index "project_teams", ["project_id"], :name => "index_project_teams_on_project_id"

  create_table "projects", :force => true do |t|
    t.string   "title"
    t.string   "starting_date"
    t.string   "ending_date"
    t.string   "description"
    t.integer  "creator_id"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "projects", ["creator_id"], :name => "index_projects_on_creator_id"

end
