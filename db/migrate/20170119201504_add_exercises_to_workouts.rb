class AddExercisesToWorkouts < ActiveRecord::Migration
  def change
    add_column :workouts, :exercise1, :string
    add_column :workouts, :exercise2, :string
    add_column :workouts, :exercise3, :string
    add_column :workouts, :exercise4, :string
    add_column :workouts, :set1, :string
    add_column :workouts, :set2, :string
    add_column :workouts, :set3, :string
    add_column :workouts, :set4, :string
    add_column :workouts, :rep1, :string
    add_column :workouts, :rep2, :string
    add_column :workouts, :rep3, :string
    add_column :workouts, :rep4, :string

  end
end