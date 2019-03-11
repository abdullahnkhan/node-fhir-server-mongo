const Strategy = require('passport-http-bearer').Strategy;
const request = require('superagent');
const env = require('var');

console.log('\n*** OAuth middleware ***\n');
console.log('INTROSPECTION_URL : ', env.INTROSPECTION_URL);
console.log('CLIENT_ID : ', env.CLIENT_ID);
console.log('CLIENT_SECRET : ', env.CLIENT_SECRET);

/**
 * Bearer Strategy
 *
 * This strategy will handle requests with BearerTokens.  This is only a template and should be configured to
 * your AuthZ server specifications.
 *
 * Requires ENV variables for introspecting the token
 */
module.exports.strategy = new Strategy(
    function(token, done) {
		if (!env.INTROSPECTION_URL) {
			return done(new Error('Invalid introspection endpoint.'));
		}
		console.log('\n************************************\n');
		request
		.post(env.INTROSPECTION_URL)
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({token: token, client_id: env.CLIENT_ID, client_secret: env.CLIENT_SECRET})
		.then((introspectionResponse) => {
			const decoded_token = introspectionResponse.body;

			if (decoded_token.active) {
				// TODO: context could come in many forms, you need to decide how to handle it.
				// it could also be decodedToken.patient etc...
				let { scope, context, sub, user_id } = decoded_token;
				let user = {user_id, sub};

				// return scopes and context.  Both required
				return done(null, user, {scope, context});
			}

			// default return unauthorized
			return done(new Error('Invalid token'));
		});
	}
);

const BearerStrategy = require('passport-http-bearer');
module.exports.strategy = new BearerStrategy(
		function(token, done) {
			if(token === 'testbearertoken') {
				console.info('authorized');
				return done(null, {username: 'user', password: 'pass'});
			} else {
				console.info('invalid token');
				return done(new Error('Invalid token'));
			}
			//User.findOne({ token: token }, function (err, user) {
			//	if (err) { return done(err); }
			//	if (!user) { return done(null, false); }
			//	return done(null, user, { scope: 'all' });
			//});
		}
);
