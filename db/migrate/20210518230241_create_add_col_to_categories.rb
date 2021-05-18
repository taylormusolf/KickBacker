class CreateAddColToCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :description, :string
  end
end
