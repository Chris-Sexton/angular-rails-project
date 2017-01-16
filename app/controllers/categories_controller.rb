class CategoriesController < ApplicationController

  def index
    respond_with Category.all 
  end

  def create 
    respond_with Category.create(category_params)
  end

  def show
    respond_with Category.find(params[:id])
  end

  def destroy
    respond_with Category.find(params[:id]).destroy
  end

  private 

  def category_params
    params.require(:category).permit(:name)
  end


end