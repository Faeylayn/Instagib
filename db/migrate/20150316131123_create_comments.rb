class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content, null: false
      t.integer :ss_id, null: false
      t.integer :parent_id
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :comments, :ss_id
    add_index :comments, :parent_id
    add_index :comments, :author_id
  end
end
