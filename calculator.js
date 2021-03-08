const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//bodyParser.urlencoded is used when try to parse data the comes from an HTMl form
//Below is grabing the information that gets posted to the server from an HTML form, we will need to use
//urlencoded
//the extended to true allows us to post nested objects
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
})

//handle post

app.post("/", (req, res) => {
  //parsed version of the HTTP request
  console.log(req.body);

  //Number convets parse text to
  var num1 = Number(req.body.num1);
  var num2 =  Number(req.body.num2);

  var result = num1 + num2;
  res.send("The total is " + result);

})

app.post("/subtraction", (req, res) => {
  //parsed version of the HTTP request
  console.log(req.body);

  //Number convets parse text to
  var num1 = Number(req.body.num3);
  var num2 =  Number(req.body.num4);

  var result = num1 - num2;
  res.send("The subtraction is " + result);


})

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
})
//BMI calculator post request
app.post("/bmicalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight / Math.pow(height, 2);
  res.send("BMI: " + result);
})
app.listen(3000, () => {
  console.log("Working");
})
