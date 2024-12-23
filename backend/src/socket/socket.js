import socketIo from 'socket.io';
import { authSocket } from '../../socket/apps/(auth)/authSocket.js';
import { initializeSocketIO as initializeChatSocket } from '../../socket/apps/(chat)/chatSocket.js';

module.exports = (server) => {
	const io = socketIo(server, {
		cors: {
			origin: 'http://localhost:3000', 
			methods: ['GET', 'POST'],
			credentials: true,
		},
	});

	io.use(authSocket); // Use the authSocket middleware for authentication

	// Initialize chat socket events
	initializeChatSocket(io);

	const connectedUsers = new Map();

	const updateUserStatus = async (userId, status) => {
		await User.findByIdAndUpdate(userId, { onlineStatus: status, lastActive: Date.now() });
		io.emit('user_status', { userId, status: status ? 'online' : 'offline' }); // Notify all users
	};

	io.on('connection', (socket) => {
		console.log('New client connected');

		const userId = socket.user._id;
		const userName = `${socket.user.first_name} ${socket.user.last_name}`;
		console.log(`A new user connected: ${userName}`);

		connectedUsers.set(userId, socket.id);
		updateUserStatus(userId, true);

		socket.on('toggle_active_status', async () => {
			const currentStatus = socket.user.activeStatus;
			socket.user.activeStatus = !currentStatus;
			await socket.user.save();
			io.emit('active_status_changed', { userId, activeStatus: socket.user.activeStatus });
		});

		socket.on('disconnect', async () => {
			console.log('Client disconnected');
			await updateUserStatus(userId, false);
			connectedUsers.delete(userId);
		});
	});

	return io;
};
