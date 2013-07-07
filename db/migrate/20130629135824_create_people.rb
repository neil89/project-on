class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :place
      t.string :email
      t.string :password
      t.string :academic
      t.string :professional
      t.string :knowledge
      t.string :icon_url

      t.timestamps
    end
  end
end