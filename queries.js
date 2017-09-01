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
    
    Listing.find({name: 'Phelps Laboratory'}, function(err, data){
      if (err) throw err;
      var size = data.length;
      var updated_at = Date();
      var address = "new address";

      for(var i = 0; i<size; i++){
        data[i].address = address;
        data[i].updated_at = updated_at;
         data[i].save(function(err, value){
          if (err) throw err;
          console.log(value);

         });

      }
  });


};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, data){
     if (err) throw err;
     console.log(data);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();