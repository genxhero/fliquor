# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  title       :string           default("Untitled")
#  description :string           default("Nondescript")
#

class Photo < ApplicationRecord
  validates :user_id, presence: true
  belongs_to :user

  has_many :tagjoins,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: "TagJoin",
  dependent: :destroy,
  inverse_of: :photo

  has_many :tags,
  through: :tagjoins,
  source: :tag

  has_many :albumjoins,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: "AlbumJoin",
  dependent: :destroy,
  inverse_of: :photo

  has_many :albums,
  through: :albumjoins,
  source: :album

  has_one_attached :image

def parse_tags(tag_arr)
  tag_ids = []
   tag_arr.each do |title|
     if  Tag.find_by(title: title) == nil
       tag = Tag.new(title: title)
       tag.save!
       tag_ids << tag.id
     else
       tag = Tag.find_by(title: title)
       tag_ids << tag.id
     end
   end
     tag_ids
   end
end
