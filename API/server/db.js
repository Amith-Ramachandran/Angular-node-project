import mongoose from 'mongoose';

export default function(callback) {
	// connect to a database if needed
	mongoose.connect('mongodb://localhost:27017/test');

 	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
		console.log('connected to mongodb...');
	});

	callback();
}
