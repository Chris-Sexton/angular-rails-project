class FavoritesController < ApplicationController

  def index
  end

  def create 
    respond_with Favorite.create(fav_params.merge(user_id: current_user.id))
  end

  private 

  def fav_params
    params.require(:favorite).permit(:title)
  end

end