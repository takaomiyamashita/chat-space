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
|name|string|null: false, index: true|
### Association
- has_many :users_groups, messages
- has_many :groups, trough: users_groups

## groupsテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
### Association
- has_many :users_groups, messages
- has_many :users, through: users_groups

## users_groupsテーブル
|column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group