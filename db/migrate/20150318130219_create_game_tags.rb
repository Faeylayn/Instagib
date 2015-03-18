class CreateGameTags < ActiveRecord::Migration
  def change
    create_table :game_tags do |t|
      t.string :label, null: false

      t.timestamps
    end
  end
end
