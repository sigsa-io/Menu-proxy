const express = require('express');
const path = require('path');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const serverOne = 'http://ec2-52-15-204-30.us-east-2.compute.amazonaws.com:3003/';
const serverTwo = 'http://ec2-18-224-190-236.us-east-2.compute.amazonaws.com:8080/';
const serverThree = 'http://ec2-54-234-229-23.compute-1.amazonaws.com:3004/';

app.use('/:restaurantId', express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.all("/restaurantName/:restaurantId", function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: serverOne});
});

app.all("/bookingCount/:restaurantId", function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: serverOne});
});

app.all("/seatingSize/:restaurantId", function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: serverOne});
});

app.all("/targettimeslots/:restaurantId", function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: serverOne});
});

app.all("/reservations/:restaurantId", function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: serverOne});
});

app.all("/menuData/:restaurantId", function(req, res) {
  console.log('redirecting to Server2');
  apiProxy.web(req, res, {target: serverTwo});
});

app.all("/restaurants/:restaurantId/reviews", function(req, res) {
  console.log('redirecting to Server3');
  apiProxy.web(req, res, {target: serverThree});
});

app.listen(3006);