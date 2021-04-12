class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :project_id, null: false
      t.float :cost, null: false
      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
