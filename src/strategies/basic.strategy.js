const { BasicStrategy } = require('passport-http');


console.log('\n*** OAuth middleware ***\n');


module.exports.strategy = new BasicStrategy(
	(username, password, done) => {

		console.log(`
			username: ${username}
			password: ${password}
		`);

		if (username === 'user' && password === 'pass') {
			return done(null, {username: 'user', password: 'pass'});
		} else {
			return done(new Error('Invalid Username/Password'));
		}

	}
);
