import { Environment } from '../types/settings'
import configDev from './config.development'
import configProd from './config.production'

const config = process.env.NODE_ENV === Environment.PRODUCTION ? configProd : configDev

export default config;