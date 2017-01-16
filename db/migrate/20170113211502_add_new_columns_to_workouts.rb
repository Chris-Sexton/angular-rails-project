class AddNewColumnsToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :category, :string
    add_column :workouts, :exercise, :string
    add_column :workouts, :sets, :string
    add_column :workouts, :reps, :string
  end
end
