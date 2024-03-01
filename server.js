require('dotenv').config();
// import app from './app.js';

const app = require('./src/app.js');
const db = require('./src/v1/models');

process.on('uncaughtException', (err) => {
	console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
	console.log(err, err.message);
	process.exit(1);
});

(async () => {
	if (process.env.NODE_ENV === 'development') {
		// await db.User.sync({ alter: true });
		// await db.Image.sync({ alter: true });
		// await db.ImageAssociation.sync({ alter: true });
		// await db.GovPartner.sync({ alter: true });
		// await db.Hero.sync({ alter: true });
		// await db.Blog.sync({ alter: true });
		// await db.Branch.sync({ alter: true });
		// await db.Gallery.sync({ alter: true });
		// await db.Claim.sync({ alter: true });
		// await db.LuPpai.sync({ alter: true });
		// await db.LuCtpl.sync({ alter: true });
		// await db.CiPpai.sync({ alter: true });
		// await db.CiCtpl.sync({ alter: true });
		// await db.ClaimImage.sync({ alter: true });
		// await db.WebApp.sync({ alter: true });
		// await db.Member.sync({ alter: true });
		// await db.Leadership.sync({ alter: true });
	}

	if (process.env.NODE_ENV === 'production') {
		// await db.User.sync({ force: true });
		// await db.Image.sync({ force: true });
		// await db.ImageAssociation.sync({ force: true });
		// await db.GovPartner.sync({ force: true });
		// await db.Hero.sync({ force: true });
		// await db.Blog.sync({ force: true });
		// await db.Gallery.sync({ force: true });
		// await db.Claim.sync({ force: true });
		// await db.LuPpai.sync({ force: true });
		// await db.LuCtpl.sync({ force: true });
		// await db.CiPpai.sync({ force: true });
		// await db.CiCtpl.sync({ force: true });
		// await db.ClaimImage.sync({ force: true });
		// await db.Branch.sync({ force: true });
		// await db.WebApp.sync({ force: true });
		// await db.Member.sync({ force: true });
		// await db.Leadership.sync({ force: true });
	}

	const port = process.env.PORT || 5000;
	const server = app.listen(port, () => {
		console.log(`App running on port ${port}...`);
	});

	process.on('unhandledRejection', (err) => {
		console.log('UNHANDLED REJECTION! 💥 Shutting down...');
		console.log(err, err.message);
		server.close(() => {
			process.exit(1);
		});
	});

	process.on('SIGTERM', () => {
		console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
		server.close(() => {
			console.log('💥 Process terminated!');
		});
	});

	// Code here
})();
