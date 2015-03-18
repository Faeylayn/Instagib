class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :ss_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end
    add_index :taggings, :ss_id
    add_index :taggings, :tag_id
  end
end
