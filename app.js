'use strict';

const Homey = require('homey');
class MyApp extends Homey.App {
	
	onInit() {
		this.log('Welcome to MyApp!');
	}
};

module.exports = MyApp;