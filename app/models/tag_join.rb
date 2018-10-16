class TagJoin < ApplicationRecord
  belongs_to :photo,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: 'Photo'

  belongs_to :tag,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: 'Tag'

  validates :tag_id, uniqueness: {scope: :photo_id}
end
