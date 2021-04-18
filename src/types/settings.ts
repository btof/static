/* eslint-disable no-unused-vars */
import { ReadPreferenceMode } from 'mongodb';

enum Environment {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development'
};

type AppSettings = {
    port: number,
    portWS: number,
    dataWriterUrl: string,
    env: Environment
};

type LogstashSettings = {
    host: string,
    port: number,
    appName: string,
    level: string
}

type LoggingSettings = {
    logstash: LogstashSettings
};

type DBCredentails = {
    username: string,
    password: string
}

type DBSettings = {
    credentials: DBCredentails,
    urls: string,
    replicaSetName: string,
    name: string,
    readPreferenceMode: ReadPreferenceMode,
    readPreferenceTags: string
}

type Settings = {
    app: AppSettings,
    db: DBSettings,
    logging: LoggingSettings
}

export { Settings, DBSettings, DBCredentails, LoggingSettings, LogstashSettings, AppSettings, Environment };