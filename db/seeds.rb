# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#
#   t.string   "origin"
#   t.string   "destination"
#   t.datetime "date"
#   t.integer  "plane_id"
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false


Flight.destroy_all
f1 = Flight.create :plane_id => '1', :origin => 'MEL', :destination => 'SYD', :date => '01/01/2016 17:00', :flightnum => 'JQ415'
f2 = Flight.create :plane_id => '4', :origin => 'BNE', :destination => 'MEL', :date => '02/01/2016 08:00', :flightnum => 'QF112'
f3 = Flight.create :plane_id => '3', :origin => 'SYD', :destination => 'BNE', :date => '01/01/2016 17:00', :flightnum => 'SD784'
f4 = Flight.create :plane_id => '2', :origin => 'PER', :destination => 'MEL', :date => '01/01/2016 15:00', :flightnum => 'EM723'
f5 = Flight.create :plane_id => '2', :origin => 'SYD', :destination => 'PER', :date => '02/01/2016 13:00', :flightnum => 'AO220'

# create_table "planes", force: :cascade do |t|
#   t.string   "name"
#   t.integer  "rows"
#   t.integer  "columns"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

Plane.destroy_all
a1 = Plane.create :name => '747', :rows => 20, :columns => 6
a2 = Plane.create :name => '756', :rows => 18, :columns => 8
a3 = Plane.create :name => '777', :rows => 22, :columns => 6
a4 = Plane.create :name => '380', :rows => 24, :columns => 5

# Associates Airplanes with Flights
a1.flights << f1
a2.flights << f2 << f5
a3.flights << f3
a4.flights << f4

# create_table "users", force: :cascade do |t|
#   t.string   "name"
#   t.string   "password_digest"
#   t.string   "email"
#   t.boolean  "admin",           default: false
#   t.datetime "created_at",                      null: false
#   t.datetime "updated_at",                      null: false
# end

User.destroy_all
u1 = User.create :name => 'Admin the Jess-star', :email => 'admin@gmail.com', :password => 'chicken', :password_confirmation  => 'chicken', :admin => true
u2 = User.create :name => 'Tall Jess the Jess-star', :email => 'jess@gmail.com', :password => 'chicken', :password_confirmation  => 'chicken'
u3 = User.create :name => 'Jane the Jess-star', :email => 'jane@gmail.com', :password => 'chicken', :password_confirmation  => 'chicken'
u4 = User.create :name => 'Fabio the Jess-star', :email => 'fabio@gmail.com', :password => 'chicken', :password_confirmation  => 'chicken'

# create_table "reservations", force: :cascade do |t|
#   t.integer  "user_id"
#   t.integer  "flight_id"
#   t.integer  "row"
#   t.string   "column"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

Reservation.destroy_all
r1 = Reservation.create :user_id => u4.id, :flight_id => f1.id, :row => 1, :column => 3
r2 = Reservation.create :user_id => u2.id, :flight_id => f2.id, :row => 1, :column => 2
r3 = Reservation.create :user_id => u4.id, :flight_id => f2.id, :row => 1, :column => 3
