/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

   Listing.find({name:"Library West"}, function(err, data){
     if (err) throw err;
     else
      console.log(data);
   });

};



var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

  Listing.findOneAndRemove({ code: 'CABL' }, function(err, data) {
    if (err) throw err;
    else console.log(data);
  })
  
};

var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  var newAddress = "new address";
  Listing.update({name: 'Phelps Laboratory'}, {address: newAddress},function(err, obj){
    if (err) throw err;
  });

};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, data){
     console.log(data);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();