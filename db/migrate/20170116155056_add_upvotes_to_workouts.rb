class AddUpvotesToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :upvotes, :integer
  end
end
