class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string  :name, null: false
      t.integer :year
      t.string  :rating
      t.float   :imdbRating
      t.string  :plot_short

      t.timestamps
    end
  end
end
