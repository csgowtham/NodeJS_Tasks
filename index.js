const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let rooms = [];
let bookings = [];

// 1. Create a room
app.post('/rooms', (req, res) => {
  const { numberOfSeats, amenities, pricePerHour } = req.body;
  const room = {
    id: rooms.length + 1,
    numberOfSeats,
    amenities,
    pricePerHour,
    bookings: [],
  };
  rooms.push(room);
  res.status(201).json(room);
});

//2. Book a room
app.post('/bookings', (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;

  const room = rooms.find(r => r.id === roomId);
  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }

  const isBooked = room.bookings.some(booking => 
    booking.date === date &&
    ((startTime >= booking.startTime && startTime < booking.endTime) ||
    (endTime > booking.startTime && endTime <= booking.endTime))
  );

  if (isBooked) {
    return res.status(400).json({ message: 'Room is already booked for the specified time' });
  }

  const booking = {
    id: bookings.length + 1,
    customerName,
    date,
    startTime,
    endTime,
    roomId,
    bookingDate: new Date().toISOString(),
  };

  room.bookings.push(booking);
  bookings.push(booking);

  res.status(201).json(booking);
});

//3. List all rooms with booking data
app.get('/rooms', (req, res) => {
  res.json(rooms);
});

//4. List all customers with booking data
app.get('/customers', (req, res) => {
  const customers = bookings.map(booking => ({
    customerName: booking.customerName,
    roomName: `Room ${booking.roomId}`,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
  }));
  res.json(customers);
});

//5. List customer booking history
app.get('/customers/:customerName/bookings', (req, res) => {
  const { customerName } = req.params;
  const customerBookings = bookings.filter(booking => booking.customerName === customerName);
  res.json(customerBookings);
});

app.listen(port, () => {
  console.log(`Hall Booking API listening at http://localhost:${port}`);
});
