class CreateProjectProfiles < ActiveRecord::Migration
  def change
    create_table :project_profiles do |t|
      t.belongs_to :project
      t.belongs_to :profile
    end

    add_index :project_profiles, :project_id
    add_index :project_profiles, :profile_id
    add_index :project_profiles, [:project_id, :profile_id]
  end
end