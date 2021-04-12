class CreateBackings < ActiveRecord::Migration[5.2]
  def change
    create_table :backings do |t|
      t.float :amount_pledged, null: false
      t.integer :backer_id, null: false
      t.integer :project_id, null: false
      t.integer :reward_id, null: false
      t.timestamps
    end
    add_index :backings, :backer_id
    add_index :backings, :project_id
    add_index :backings, :reward_id
  end
end
