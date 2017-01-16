class WorkoutsController < ApplicationController

  def index
    respond_with Workout.all 
  end

  def create 
    respond_with Workout.create(workout_params)
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
    params.require(:workout).permit(:title, :category, :exercise, :sets, :reps)
  end

end