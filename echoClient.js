//Kald igen net bilblioteket og gem i en variabel
var net = require('net');

var client = new net.Socket();

client.connect(4000, "192.168.0.108", function() {
    console.log('Connected');
    client.write("Hello!");
});

// Brug her client.on til at behandle data i modtager fra serveren.
client.on('data', function(data) {
    console.log('Received: ' + data);
});

//Nedenstående lukker jeres forbindelse ved termination
client.on('close', function() {
    console.log('Connection closed');
});