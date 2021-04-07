class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :campaign
      t.string :updates
      t.string :faq
      t.string :location, null: false
      t.datetime :start_date, null:false
      t.datetime :end_date, null:false
      t.float :funding_goal, null:false
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :projects, :title, unique: true
    add_index :projects, :creator_id, unique: true
  end
end
