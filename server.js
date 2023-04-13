require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const Flight = require("./models/Flight");

const app = express();

//Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.url)
  next()
})
// parses the data from the request
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.send("<h1>Get Flights</h1>");
})

app.get('/flight', (req, res) => {
  Flight.find({}, (error, allFlight) => {
      res.render('flight/Index', {flight: allFlight})
  })
})


app.post('/flight', (req, res) => {
  console.log(req.body);
  if (req.body.readyToBook === 'on') {
      req.body.readyToBook = true;
  } else {
      req.body.readyToBook = false;
  }

  Flight.create(req.body, (error, createdFlight) => {
      res.redirect('/flight')
  })

})

app.get('/flight/new', (req, res) => {
  res.render('flight/New')
})

// if none of the routes matches the request show 404 pg
app.get('*', (req, res) => {
  res.render('404')
})


app.listen(3000, () => {
  console.log("Server is up!");
  connectToDB();
});
