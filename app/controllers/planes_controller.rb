class PlanesController < ApplicationController
  before_action :authorize, :except => [:index, :show]
  before_action :set_plane, only: [:show, :edit, :update, :destroy]


  # GET /planes
  # GET /planes.json
  def index
    @planes = Plane.all
  end

  # GET /planes/1
  # GET /planes/1.json
  def show
    @plane = Plane.find(params[:id])
    #plane = Plane.where(:name => Flight.plane_id).first()
    @planeRows = @plane.rows
    @planeColumns = @plane.columns
    @alphabet = ("A".."Z").to_a  

  end

  # GET /planes/new
  def new
    @plane = Plane.new
  end

  # GET /planes/1/edit
  def edit
    @plane = Plane.find(params[:id])
  end

  # POST /planes
  # POST /planes.json
  def create
    @plane = Plane.new(plane_params)

    respond_to do |format|
      if @plane.save
        format.html { redirect_to @plane, notice: 'Plane was successfully created.' }
        format.json { render :show, status: :created, location: @plane }
      else
        format.html { render :new }
        format.json { render json: @plane.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /planes/1
  # PATCH/PUT /planes/1.json
  def update
    respond_to do |format|
      if @plane.update(plane_params)
        format.html { redirect_to @plane, notice: 'Plane was successfully updated.' }
        format.json { render :show, status: :ok, location: @plane }
      else
        format.html { render :edit }
        format.json { render json: @plane.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /planes/1
  # DELETE /planes/1.json
  def destroy
    @plane.destroy
    respond_to do |format|
      format.html { redirect_to planes_url, notice: 'Plane was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plane
      @plane = Plane.find(params[:id])
    end

    def authorize
      if !@admin
        redirect_to root_path
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def plane_params
      params.require(:plane).permit(:name, :rows, :columns)
    end
end
