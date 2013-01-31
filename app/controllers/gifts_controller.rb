class GiftsController < ApplicationController
  def index
    render json: Gift.all
  end

  def create
    render json: { gift: Gift.create!(params[:gift]) }
  end
end
