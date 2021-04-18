const winston = require('winston');
const LogstashUDP = require('winston-logstash-udp').LogstashUDP;

export const logger = new (winston.Logger)({
	transports: [
		new (LogstashUDP)({
			port: 9999,
			appName: 'my application name',
			host: '127.0.0.1'
		})
	]
});