class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :owner_id, null: false

      t.timestamps
    end
  end
end
