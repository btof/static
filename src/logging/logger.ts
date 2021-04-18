const Winston = require('winston');
const WinstonLogStash = require('winston3-logstash-transport');

const logger = Winston.createLogger();

logger.add(new WinstonLogStash({
	mode: 'udp',
	host: '127.0.0.1',
	applicationName: "app-name",
	port: 28777
}));

logger.add(new Winston.transports.Console({ level: "debug" }));

export default logger;