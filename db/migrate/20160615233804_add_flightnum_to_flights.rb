class AddFlightnumToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :flightnum, :string
  end
end
