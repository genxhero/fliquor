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
  after_initialize :thumbnil?

  def thumbnil? #normally i would snake case this but the pun was too awesome
     if !self.thumbnail.attached?
         self.thumbnail.attach(io: File.open('app/assets/images/14355.svg'), filename: '14355.svg')
     end
  end

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

  has_one_attached :thumbnail

end
