class WorkoutsController < ApplicationController

  def index
    respond_with Workout.all
  end

  def create 
    respond_with Workout.create(workout_params.merge(user_id: current_user.id))

    respond_with root_path
  end

  def show
    respond_with Workout.find(params[:id])
  end

  def upvote
    workout = Workout.find(params[:id])
    workout.increment!(:upvotes)
    respond_with workout
  end

  def downvote
    workout = Workout.find(params[:id])
    workout.increment!(:downvotes)
    respond_with workout
  end

  def destroy
    respond_with Workout.find(params[:id]).destroy
  end

  private 

  def workout_params
    params.require(:workout).permit(:title, :exercise, :sets, :reps, :category, :exercise1, 
      :exercise2, :exercise3, :exercise4, :set1, :set2, :set3, :set4, :rep1, :rep2, :rep3, :rep4)
  end

end