# Database Schema

## Users
Column Name | Data Type | Details
------------|-----------|----------
`id`        | integer   | not null
`username`  | string    | not null, unique
`email`     | string    | not null, unique
`first_name`| string    | not null
`last_name` | string    | not null
`password_digest` | string| not null
`session_token` | string | not null
-----------------------------------

## Photos
Column Name   | Data Type | Details
--------------|-----------|---------
`id`          | integer   |not null
`user_id`     | integer   | not null
`title`       | string    |
`description` |  text    |
-----------------------------------

## Albums
Column Name   | Data Type | Details
--------------|-----------|---------
`id`          | integer   |not null
`title`       | string  | not null
`user_id`    | integer | not null
-----------------------------------

## Tags
Column Name | Data Type | Details
------------|-----------|---------
`id`        | integer   |not null
`title`     | string | not null
-----------------------------------

## Comments
Column Name | Data Type | Details
------------|-----------|---------
`id`        | integer   |not null
`user_id`   | integer   |not null
`photo_id`  | integer   |not null
`body`      | text      |not null
-----------------------------------

## AlbumJoins
Column Name | Data Type | Details
------------|-----------|---------
`id`        | integer   | not null
`album_id`  | integer   | not null
`photo_id`  | integer  | not null
-----------------------------------

## TagJoins
Column Name | Data Type | Details
------------|-----------|---------
`id`        | integer   | not null
`tag_id`    |integer | not null|
`photo_id`  | integer | not null
-----------------------------------
