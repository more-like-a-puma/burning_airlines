json.array!(@flights) do |flight|
  json.extract! flight, :id, :origin, :destination, :date, :plane_id
  json.url flight_url(flight, format: :json)
  json.plane flight.plane.name
  # Include the associated plane
end
