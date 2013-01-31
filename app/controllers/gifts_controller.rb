class GiftsController < ApplicationController
  def index
    render json: Gift.all
  end

  def create
    render json: { gift: Gift.create!(params[:gift]) }
  end

  def destroy
    Gift.find(params[:id]).destroy
    render json: true
  end
end
