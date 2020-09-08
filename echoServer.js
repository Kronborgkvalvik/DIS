
//Hent 'net' biblioteket og gem det i en variabel
var net = require("net");

//Herunder skal net's createServer-funktion benyttes med en callback-funktion der tager et socket objekt
net.createServer(function(socket) {
    console.log("Connection established");
    socket.setEncoding("utf8"); //Den her skal I ikke røre

//Skriv noget til potentielle lyttere her
    socket.write("Hello!");
//Her skal I skrive hvad jeres socket skal gøre, når den modtager data med en callback-funktion
    socket.on("data", function(data) {
        socket.write(data.toString());
        console.log("got: ", data.toString());
    });
// Vi lukket socket ned ved afslutning
    socket.on("end", function() {
        console.log("Client connection is terminated.")
    });
}).listen(4000, "192.168.0.108");