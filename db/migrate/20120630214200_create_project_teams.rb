class CreateProjectTeams < ActiveRecord::Migration
  def change
    create_table :project_teams do |t|
      t.belongs_to :coworker
      t.belongs_to :project
    end

    add_index :project_teams, :coworker_id
    add_index :project_teams, :project_id
    add_index :project_teams, [:coworker_id, :project_id]
  end
end