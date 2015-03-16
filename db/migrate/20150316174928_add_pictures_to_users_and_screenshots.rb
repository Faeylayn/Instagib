class AddPicturesToUsersAndScreenshots < ActiveRecord::Migration
  def self.up
    add_attachment :users, :picture
    add_attachment :screenshots, :picture
  end

  def self.down
    remove_attachment :users, :picture
    remove_attachment :screenshots, :picture
  end

end
