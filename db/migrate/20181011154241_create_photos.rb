class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :title, default: "Untitled"
      t.string :description, default: "Nondescript"
    end
    add_index :photos, :user_id
  end
end
