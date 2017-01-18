class Workout < ActiveRecord::Base

  # belongs_to :category

  belongs_to :user

  def as_json(options = {})
    super(options.merge(include: :user))
  end

end