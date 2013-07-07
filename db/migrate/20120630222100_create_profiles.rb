class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :tools
      t.integer :number

      t.timestamps
    end
  end
end