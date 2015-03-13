# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(username: "test", email: "testemail", password_digest: "$2a$10$/.Mfaz9NyRGggzPpCRkaaeYCTCiaiNW.YJoe5SUTRxOnLMgl349XS", session_token: "2lsirbL6t7Dpy1auqw2pZQ")

Screenshot.create(title: "blah blah blah", owner_id: 1, album_id: nil, image_url: "http://sauerbraten.sourceforge.net/newerer/screenshot_2128789.jpg", created_at: "2015-03-13 15:30:04", updated_at: "2015-03-13 15:30:04")
Screenshot.create(title: "new thing", owner_id: 1, album_id: nil, image_url: "http://www.gamepur.com/files/imagepicker/51/adventurer-screenshot-1.jpg", created_at: "2015-03-13 15:34:09", updated_at: "2015-03-13 15:34:09")
Screenshot.create(title: "world of tanks", owner_id: 1, album_id: nil, image_url: "http://fc02.deviantart.net/fs71/f/2010/067/1/6/Desktop_Screenshot_3_8_2010_by_LaJeuneFilleNeSait.jpg", created_at: "2015-03-13 15:37:12", updated_at: "2015-03-13 15:37:12")
Screenshot.create(title: "world of tanks", owner_id: 1, album_id: nil, image_url: "http://www.1zoom.me/big2/654/314834-BeTaJIb.jpg", created_at: "2015-03-13 15:42:21", updated_at: "2015-03-13 15:42:21")
Screenshot.create(title: "world of tanks", owner_id: 1, album_id: nil, image_url: "http://lvlt.bioware.cdn.ea.com/bioware/u/f/eagames/bioware/dragonage2/assets/gallery/screenshots/screenshot-59-sebastian_dragon-o.jpg", created_at: "2015-03-13 15:43:13", updated_at: "2015-03-13 15:43:13")
Screenshot.create(title: "Thingy", owner_id: 1, album_id: 1, image_url: "http://media.moddb.com/images/members/1/771/770163/screenshot-full-08.jpg", created_at: "2015-03-13 14:05:19", updated_at: "2015-03-13 16:21:42")

Album.create(title: "test album", owner_id: 1)
Album.create(title: "not yours", owner_id: 2)
