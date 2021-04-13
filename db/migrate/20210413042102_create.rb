class Create < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :category_id, :integer
    add_index :projects, :category_id
  end
end
