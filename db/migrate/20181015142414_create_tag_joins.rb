class CreateTagJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :tag_joins do |t|
      t.integer :photo_id, null: false
      t.integer :tag_id, null: false
    end
     add_index :tag_joins, :photo_id
    add_index :tag_joins, :tag_id
  end
end
