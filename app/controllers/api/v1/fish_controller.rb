class Api::V1::FishController < ApplicationController
  before_action :set_fish, only: [:show, :edit, :update, :destroy]

  # GET /fish
  # GET /fish/.json

  def index 
    @fish = Fish.all.order(common_name: :asc)
    render json: @fish
  end

  # GET /fish/1
  # GET /fish/1.json
  def show
    if @fish
      render json: @fish
    else
      render json: @fish.errors
    end
  end

  # GET /fish/new
  def new 
    @fish = Fish.new
  end

  # GET /fish/1/edit
  def edit
  end

  # POST /fish
  # POST /fish.json
  def create
    @fish = Fish.new(fish_params)

    if @fish.save
      render json: @fish      
    else  
      render json: @fish.errors
    end
  end

  # PATCH/PUT /fish/1
  # PATCH/PUT /fish/1.json
  def update
  end
  
  # DELETE /fish/1
  # DELETE /fish/1.json
  def destroy 
    @fish.destroy

    render json: { notice: 'Fish was successfully removed.'}
  end

  private 
    # Use callbacks to share common setup or constraints  between actions.
    def set_fish
      @fish = Fish.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fish_params
      params.permit(:common_name, :scientific_name, :ph, :quantity)
    end
end

