import { ReadPreferenceMode } from "mongodb";
import { Environment, Settings } from "../types/settings";

const settings: Settings = {
	app: {
		env: Environment.DEVELOPMENT,
		dataWriterUrl: process.env.APP_DATA_WRITER_URL || "",
		port: parseInt(process.env.APP_PORT || "5000"),
		portWS: parseInt(process.env.APP_WS_PORT || "5001")
	},
	db: {
		credentials: {
			username: process.env.DB_CREDENTIALS_USERNAME || "",
			password: process.env.DB_CREDENTIALS_PASSWORD || ""
		},
		name: process.env.DB_NAME!,
		readPreferenceMode: (process.env.DB_READ_PREFERENCE_MODE || "") as ReadPreferenceMode,
		readPreferenceTags: process.env.DB_READ_PREFERENCE_TAGS || "",
		replicaSetName: process.env.DB_REPLICA_SET_NAME || "",
		urls: process.env.DB_URLS || ""
	},
	logging: {
		logstash: {
			appName: process.env.LOGGING_LOGSTASH_APP_NAME || "",
			host: process.env.LOGGING_LOGSTASH_APP_HOST || "",
			level: process.env.LOGGING_LOGSTASH_APP_LEVEL || "",
			port: parseInt(process.env.LOGGING_LOGSTASH_APP_PORT || "")
		}
	}
}

export default settings;