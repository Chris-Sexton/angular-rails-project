class WorkoutsController < ApplicationController

  def index
    respond_with Workout.all
  end

  def create
    respond_with Workout.create(workout_params.merge(user_id: current_user.id))
  end

  def show
    respond_with Workout.find(params[:id])
  end

  def update
    workout = Workout.find(params[:id])
    if workout.user_id == current_user.id
      workout.update(workout_params)
      respond_with workout
    end
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
    workout = Workout.find(params[:id])
    if workout.user_id == current_user.id
      respond_with workout.destroy
    end
  end

  def workout_params
    params.require(:workout).permit(:title, :exercise, :sets, :reps, :category)
  end

end