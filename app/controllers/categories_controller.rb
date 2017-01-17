class CategoriesController < ApplicationController

  # def index
  #   respond_with Category.all 
  # end

  # def create 
  #   workout = Workout.find(params[:workout_id])
  #   category = workout.categories.create(category_params)
    
  #   respond_with workout, category
  # end

  # def show
  #   respond_with Category.find(params[:id])
  # end

  # # def upvote
  # #   workout = Workout.find(params[:id])
  # #   workout.increment!(:upvotes)
  # #   respond_with workout
  # # end

  # # def downvote
  # #   workout = Workout.find(params[:id])
  # #   workout.increment!(:downvotes)
  # #   respond_with workout
  # # end

  # def destroy
  #   respond_with Category.find(params[:id]).destroy
  # end

  # private 

  # def category_params
  #   params.require(:category).permit(:name)
  # end


end