const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
var db = require('./db');
app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req, res)=>{
	res.sendFile(path.join(__dirname,'dist/index.html'));
});

const server = http.createServer(app);

const io = socketIO(server);
let numberOfOnlineUsers = 0;
let chatLog = [];

let i = 0;
io.on('connection',(socket)=>{
	numberOfOnlineUsers++;

	io.emit('numberOfOnlineUsers',numberOfOnlineUsers);
	console.log('New user connected',numberOfOnlineUsers);
	
	var myCallback = function(data) {
		console.log('got data: ',data);
		chatLog = data;
		io.emit('chatLog',chatLog);
	  };
	//Fetch chat log on MongoDB server
	db.findChat(myCallback);

	//Disconnect event
	socket.on('disconnect',()=>{
		numberOfOnlineUsers--;
		io.emit('numberOfOnlineUsers',numberOfOnlineUsers);
		console.log('User disconnected',numberOfOnlineUsers);
	});
	//Submit Chat Content
	socket.on('onSubmit', (data, fn) => {
		chatLog.push(data);
		db.insertChat(data);
		io.emit('chatLog',chatLog);
   	});
});
server.listen(port, ()=>{
	console.log(`Server running on port ${port}`);
});
