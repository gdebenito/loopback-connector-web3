'use-strict';

/**
 * Same as 
 * var SG = require('strong-globalize');
 * SG.SetRootDir(__dirname); 
 * var g = new SG();
 */
var g = require('strong-globalize')();

/**
 * Importing Web3
 */
var Web3 = require('web3');

/**
 * Debug library
 */
var debug = require('debug')('loopback:connector:web3');


module.exports = exports = Web3Connector;
/**
 * @constructor
 * Creates the web3 connector
 * @param {{provider: string, debug: boolean}} settings 
 * The Datasource settings are the datasource.json object
 * 
 */
function Web3Connector(settings) {

	if (!settings.provider) {
		throw new Error(g.f('{{settings.provider}} must be specified. Check {{datasource.json}}'));
	}

	if (typeof settings.provider !== 'string') {
		throw new Error(g.f('{{settings.provider}} must be type of {{string}}. Check {{datasource.json}}'));
	}

	this.debug = settings.debug;
	this.provider = settings.provider;

	if(this.debug){
		debug(g.f('{{settings.provider}} is "%s"',settings.provider));
	}

};

/**
 * @returns {Object} Web3 instance
 */
Web3Connector.prototype.getDataAccessObject = function () {
	if(this.DataAccessObject) {
		return this.DataAccessObject;
	}
	var self = this;
	var DataAccessObject = new Web3(self.provider);

	self.DataAccessObject = DataAccessObject;

	return self.DataAccessObject;
}