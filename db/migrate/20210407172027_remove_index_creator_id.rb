class RemoveIndexCreatorId < ActiveRecord::Migration[5.2]
  def change
    remove_index :projects, name: "index_projects_on_creator_id"
    add_index :projects, :creator_id
  end
end
