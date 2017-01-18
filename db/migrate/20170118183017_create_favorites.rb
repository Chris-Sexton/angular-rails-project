class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.string :title

      t.timestamps null: false
    end
  end
end
