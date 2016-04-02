var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');

module.exports = function(wagner) {
    wagner.factory('Config', function() {
	return JSON.parse(fs.readFileSync('./config.json').toString());
    });
    
	
	// TODO: Make Stripe depend on the Config service and use its `stripeKey`
	wagner.invoke(function(Config) {
	    // property to get the Stripe API key.
	    wagner.factory('Stripe', function() {
		return Stripe(Config.stripeKey);
	    });
	});

    wagner.factory('fx', fx);

};
