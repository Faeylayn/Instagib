class CreateGameTaggings < ActiveRecord::Migration
  def change
    create_table :game_taggings do |t|
      t.integer :ss_id, null: false
      t.integer :game_tag_id, null: false

      t.timestamps
    end
    add_index :game_taggings, :ss_id
    add_index :game_taggings, :game_tag_id
  end
end
