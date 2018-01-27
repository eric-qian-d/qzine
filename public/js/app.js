// const express = require('express');
// const http = require('http');
// const logger = require('morgan');

// const app = express();

// app.use(logger());

// app.use(function(req, res, next){
// 	if (req.url === '/home.html') {
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		res.end('home.html');
// 	} else {
// 		next();
// 	};
// });

// app.use(function(req, res, next){
// 	if (req.url === '/about.html') {
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		res.end('about.html');
// 	} else {
// 		next();
// 	};
// });

// app.use(function(req, res, next){
// 	if (req.url === '/explore.html') {
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		res.end('explore.html');
// 	} else {
// 		next();
// 	};
// });

// app.use(function(req, res, next){

// 	res.writeHead(404, {'Content-Type': 'text/plain'});
// 	res.end('404 error!\n');
	
// });

// http.createServer(app).listen(3000);
// console.log("Server running at http://localhost:3000/");