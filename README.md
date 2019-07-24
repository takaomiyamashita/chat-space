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
|body|text|
|image|string|
|group_id|references|null: false,foreign_key: true|
|user_id|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|column|Type|Options|
|------|----|-------|
|name|text|null: false, index: true|
### Association
- belongs_to :group

## groupsテーブル
|column|Type|Options|
|------|----|-------|
|name|text|null: false, index: true|

## users_groupsテーブル
|column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## users_messagesテーブル
|column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :message