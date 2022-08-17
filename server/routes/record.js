const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  console.log("Hi")
 let db_connect = dbo.getDb();
 //db_connect.collection('Address 0.5').updateMany({}, {$rename:{"Departure station name":"DepartureStationName"}}, false, true);
 db_connect
   .collection("Address 0.5")
   .find({
    "Covered distance (m)": "5000"  
   })
   .limit(10)
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
}); 
 
// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("Address 0.5")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     })
     .limit(35);
});
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {     
     name: req.body.name,    
     position: req.body.position,     
     level: req.body.level,   
   }, 
  }
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect.collection("records").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 


// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
  // Data can be extracted from the request as follows:

  // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
  const {stationName} = query;

  // Headers, e.g. {"Content-Type": ["application/json"]}
  const contentTypes = headers["Content-Type"];

  // Raw request body (if the client sent one).
  // This is a binary object that can be accessed as a string using .text()
  const reqBody = body;

  console.log("arg1, arg2: ", stationName);
  console.log("Content-Type:", JSON.stringify(contentTypes));
  console.log("Request body:", reqBody);

  // You can use 'context' to interact with other application features.
  // Accessing a value:
  // var x = context.values.get("value_name");

  // Querying a mongodb service:
  const doc = context.services.get("Cluster0").db("Helsinki-City-Bike-App").collection("Address 0.5").findOne({
    $or: [
      { 
        "Departure station name": stationName }
    ]
  });

  // Calling a function:
  const result = context.functions.execute("getStationDetails", stationName);

  // The return value of the function is sent as the response back to the client
  // when the "Respond with Result" setting is set.
  return  result;
};

module.exports = recordRoutes;