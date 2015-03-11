class CreateScreenshots < ActiveRecord::Migration
  def change
    create_table :screenshots do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.integer :album_id
      t.string :image_url

      t.timestamps
    end

    add_index :screenshots, :owner_id
    add_index :screenshots, :album_id
  end
end
