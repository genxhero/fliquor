class Tag < ApplicationRecord
  has_many :tagjoins,
  dependent: :destroy,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: "TagJoin",
  inverse_of: :tag

  has_many :photos,
  through: :tagjoins,
  source: :photo
  #check cats video this looks funky
  # validates :tag_id, uniqueness: {scope: :photo_id}
end
