class RemoveNullFromComments < ActiveRecord::Migration
  def change
    change_column :comments, :author_id, :integer, :null => true
  end
end
