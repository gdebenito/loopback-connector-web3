'use-strict';

var g = require('strong-globalize')();
var Web3Connector = require('./web3-connector');
// var debug = require('debug')('loopback:connector:web3');

/**
 * Initializes the connector
 * @param {{settings:{provider:string}, connector?:any}} dataSource 
 * @param {Function} callback
 */
exports.initialize = function initializeConnector(dataSource, callback) {

	if (typeof dataSource !== 'object') {
		throw new Error(g.f('{{dataSource}} must be type of {{object}}'));
	}

	var connector = dataSource.connector = new Web3Connector(dataSource.settings);

	connector.getDataAccessObject();

	dataSource.connector.dataSource = dataSource;

	if(callback) {
		process.nextTick(callback);
	}

}
