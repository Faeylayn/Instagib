# Schema Information

## screenshots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
album_id    | integer   | foreign key (references albums, can be null)
title       | string    | not null
image       | image     |
image_url   | string    |

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
owner_id    | integer   | not null, foreign key (references users)

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users)
content         | string    | not null
sceenshot_id    | integer   | not null, foreign key (references screenshots)
parent_id       | integer   | foreign key (references comments, can be null)

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
screenshot_id   | integer   | not null, foreign key (references screenshots)
tag_id          | integer   | not null, foreign key (references tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | integer   | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## friendings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
friended_id | integer   | not null, foreign key (references users)
