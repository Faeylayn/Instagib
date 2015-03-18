class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :label, null: false

      t.timestamps
    end
  end
end
