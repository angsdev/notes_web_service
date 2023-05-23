/*============================ Imports ============================*/
import config from 'config';
import mongoose from 'mongoose';
import { ObjectOfAnyValue } from '../../../types';
/*============================ Vars setup ============================*/
const { host, port, name }: ObjectOfAnyValue = config.get('database.mongodb');
/*============================ Rest ============================*/

mongoose.connect(`${host}:${port}/${name}`);
mongoose.connection
        .once('connected', () => console.info(`Database connected: ${host}:${port}/${name}`))
        .on('error', (err) => console.error(`Error found ${err}.`))
        .on('disconnected', () => console.info('Database disconnected.'));

export { mongoose };