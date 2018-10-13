class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.timestamps
      t.string :title, null: false
      t.integer :user_id, null: false
    end
    add_index :albums, :user_id
  end
end
