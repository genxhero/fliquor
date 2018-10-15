# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#  user_id    :integer          not null
#

class Album < ApplicationRecord
  validates :user_id, presence: true




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
