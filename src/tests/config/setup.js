import supertest from 'supertest'
import { HOSTNAME, PORT } from '../../helper/envreader.js';

export const request = supertest(`${HOSTNAME}:${PORT}`);