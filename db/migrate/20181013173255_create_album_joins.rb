class CreateAlbumJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :album_joins do |t|
      t.timestamps
      t.integer :album_id, null: false
      t.integer :photo_id, null: false
    end
  end
end
