class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string     :title
      t.string     :starting_date
      t.string     :ending_date
      t.string     :description
      t.belongs_to :creator

      t.timestamps
    end

    add_index :projects, :creator_id
  end
end
