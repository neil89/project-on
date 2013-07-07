class CreatePeopleProfiles < ActiveRecord::Migration
  def change
    create_table :people_profiles do |t|
      t.belongs_to :person
      t.belongs_to :profile
    end

    add_index :people_profiles, :person_id
    add_index :people_profiles, :profile_id
    add_index :people_profiles, [:person_id, :profile_id]
  end
end