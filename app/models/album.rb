class Album < ApplicationRecord
  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "User"

  has_many :albumjoins,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: "AlbumJoin",
  dependent: :destroy,
  inverse_of: :album

  has_many :photos,
  through: :albumjoins,
  source: :photo
end
