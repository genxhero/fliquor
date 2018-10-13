# == Schema Information
#
# Table name: album_joins
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  album_id   :integer          not null
#  photo_id   :integer          not null
#

class AlbumJoin < ApplicationRecord
  belongs_to :album,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: "Album"

  belongs_to :photo,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: "Photo"
end
