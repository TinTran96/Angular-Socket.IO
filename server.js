const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req, res)=>{
	res.sendFile(path.join(__dirname,'dist/index.html'));
});

const server = http.createServer(app);

const io = socketIO(server);
let numberOfOnlineUsers = 0;
let pushNotification = "Notification here";
let i = 0;
io.on('connection',(socket)=>{
	numberOfOnlineUsers++;
	io.emit('numberOfOnlineUsers',numberOfOnlineUsers);
	console.log('New user connected',numberOfOnlineUsers);
	socket.on('disconnect',()=>{
		numberOfOnlineUsers--;
		io.emit('numberOfOnlineUsers',numberOfOnlineUsers);
		console.log('User disconnected',numberOfOnlineUsers);
	});
	socket.on('pushButton', (name, fn) => {
		fn('SEND NOTIFICATION');
		i++;
		if(i!=2)
		{
			io.emit('pushNotification',pushNotification);
		}
		else
		{
			i=0;
			io.emit('pushNotification',"");
		}
		
   	});
});
server.listen(port, ()=>{
	console.log(`Server running on port ${port}`);
});