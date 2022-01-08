import supertest from 'supertest'
import { HOSTNAME, PORT } from '../../common/config.js';

export const request = supertest(`${HOSTNAME}:${PORT}`);