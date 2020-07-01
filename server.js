//Yuzhuo Chen
//CEN 3031
//2017-8-23

var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url); // convert url to JSON format

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
   if(request.method == 'GET' && parsedUrl.path == '/listings') {
     response.writeHead(200, {"Content-Type": "application/json"})
     response.end(JSON.stringify(listingData));
//response.end(listingData);
     response.statusCode = 200;
   }
   else {
     response.writeHead(404);
     response.end("Bad gateway error");
     response.statusCode = 400;
   }
 };

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
   if(err) throw err;
   listingData = JSON.parse(data);   //convert JSON to object
   //listingData = data;
});

server = http.createServer(requestHandler);
server.listen(port);

//JSON.parse()   convert JSON to object
//JSON.stringify()  convert objecct to JSON
//url.parse(request.url);  convert url to JSON format
