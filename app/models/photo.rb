class Photo < ApplicationRecord
  belongs_to :user

  has_many :tagjoins,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: "TagJoin",
  dependent: :destroy,
  inverse_of: :photo

  has_many :tags,
  through: :tagjoins,
  source: :photo

  has_many :albumjoins,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: "AlbumJoin",
  dependent: :destroy,
  inverse_of: :photo

  has_many :albums,
  through: :albumjoins,
  source: :album
end
