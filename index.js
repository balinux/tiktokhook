const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000; // You can use any port you like

// Use body-parser middleware to parse JSON data from incoming requests
// app.use(bodyParser.json());

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for your webhook endpoint (e.g., /webhook)
app.post('/webhook', (req, res) => {
  // Process the data from the webhook payload here
  console.log('Webhook received:', req.body);

  // Respond to the webhook request
  res.status(200).send('Webhook received successfully');
});

app.get('/',(req, res) => {
  res.send('halo wardana')
})

// server config

// initial socket io
io.on("connection", (socket) => {
  console.log("new client connected");
});

// Start the server
app.listen(port, () => {
  console.log(`Webhook server is running on port ${port}`);
});
