# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "test", email: "test@email.com", password_digest: "$2a$10$/.Mfaz9NyRGggzPpCRkaaeYCTCiaiNW.YJoe5SUTRxOnLMgl349XS", session_token: "2lsirbL6t7Dpy1auqw2pZQ")


u1=Screenshot.new(title: "Test Picture", owner_id: 1, album_id: nil)
u1.picture = File.open("#{Rails.root}/public/images/pic1.jpg")
u1.save!
u2=Screenshot.new(title: "Wow", owner_id: 1, album_id: nil)
u2.picture = File.open("#{Rails.root}/public/images/pic2.jpg")
u2.save!
u3=Screenshot.new(title: "Eve", owner_id: 1, album_id: nil)
u3.picture = File.open("#{Rails.root}/public/images/pic3.jpg")
u3.save!
u4=Screenshot.new(title: "quake like", owner_id: 1, album_id: nil)
u4.picture = File.open("#{Rails.root}/public/images/pic4.jpg")
u4.save!
u5=Screenshot.new(title: "dragon", owner_id: 1, album_id: 2)
u5.picture = File.open("#{Rails.root}/public/images/pic5.jpg")
u5.save!
u6=Screenshot.new(title: "rts", owner_id: 1, album_id: 1)
u6.picture = File.open("#{Rails.root}/public/images/pic6.jpg")
u6.save!

Album.create(title: "test album", owner_id: 1)
Album.create(title: "not yours", owner_id: 2)

GameTag.create(label: "A Game")

GameTagging.create(game_tag_id: 1, ss_id: 1)
GameTagging.create(game_tag_id: 1, ss_id: 2)
GameTagging.create(game_tag_id: 1, ss_id: 3)
GameTagging.create(game_tag_id: 1, ss_id: 4)
GameTagging.create(game_tag_id: 1, ss_id: 5)
GameTagging.create(game_tag_id: 1, ss_id: 6)
