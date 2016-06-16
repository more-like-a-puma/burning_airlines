#Burning Airlines

##Requirements

An admin can create planes on the `/airplanes` page. `DONE.`

A plane has a name, rows, and columns. `DONE.`

When a new plane is saved the page should show a seating diagram. `JANE`

An admin can create flights on the `/flights` page. `DONE.`

A flight has a flight number, origin, destination, date, and plane. `DONE.`

When a new flight is saved, the page should show a list with the newest date at the top of the list and the number of available seats on the plane. `FABIO`

A user can search for flights on the `/search` page. `FABIO & JANE`
The search page should have an input form for the origin and destination. `DONE.`
When a user creates a search, the page should show a list of flights with the newest date at the top, and include the number of available seats on the flight. `FABIO (main#show)`

When the user selects a flight, we should go to the show page ie, `/flights/3`. `FABIO`
The plane show page should show a seating diagram with available seats and seats that have been selected, with their names. `JANE`

A user can select a seat. `JANE`

When a seat is saved, the available seats on the `/flights` page should update. `JANE`


##Models
There are models for Airplane, Flight, User, and Reservation. `DONE.`

An Airplane has many Flights and a Flight belongs to an Airplane. `DONE.`

A User has many Reservations and a Reservation belongs to a User. `DONE.`

A Flight has many Reservations and a Reservation belongs to a Flight. `DONE.`

The Reservation table is a join table between Users and Flights, which have a many-to-many relationship through Reservations. `DONE.`

The Airplane model has rows and columns to determine the configuration of the plane; the Airplane model has a row and a column for a particular seat. `DONE.`
