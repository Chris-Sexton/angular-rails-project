class AddDownvotesToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :downvotes, :integer
  end
end
