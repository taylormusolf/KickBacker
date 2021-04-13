class CreateFixReward < ActiveRecord::Migration[5.2]
  def change
    remove_column :backings, :reward_id
    add_column :backings, :reward_id, :integer
  end
end
