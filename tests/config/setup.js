import supertest from 'supertest'

export const PORT = 5000;
export const BASEURL = `http://localhost:${PORT}`
export const request = supertest(BASEURL);