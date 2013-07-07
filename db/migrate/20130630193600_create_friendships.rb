class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.belongs_to :person
      t.belongs_to :friend
    end

    add_index :friendships, :person_id
    add_index :friendships, :friend_id
    add_index :friendships, [:person_id, :friend_id]
  end
end