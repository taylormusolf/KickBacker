class CreateUniqueBacking < ActiveRecord::Migration[5.2]
  def change
      add_index :backings, [:backer_id, :project_id], unique: true
  end
end
