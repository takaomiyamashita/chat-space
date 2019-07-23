# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## messagesテーブル

|column|Type|Options|
|------|----|-------|
|body|text|null: true|
|image|string|null: ture|
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|column|Type|Options|
|------|----|-------|
|name|text|null: false, foreign_key: true|
|Email|text|null: false, foreign_key: true|
|password|text|null: false| 

### Association
- belongs_to :group

## groupsテーブル

|column|Type|Options|
|------|----|-------|
|group_name|text|null: false, foreign_key: true|

### Association
- has_many ;user
