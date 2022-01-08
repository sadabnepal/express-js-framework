import { expect } from 'chai';
import { contentTypeJSON, updateUserPayload, userPayload } from '../payload/users.js';
import { RECORD_CREATED_MESSAGE, RECORD_UPDATED_MESSAGE, RECORD_DELETED_MESSAGE, WELCOME_MESSAGE } from '../../common/constants.js';
import { request } from '../config/setup.js';

let userID;

describe('Test users services', () => {

    it('should validate welcome text', async () => {
        const response = await request.get('/')
        expect(response.text).to.equal(WELCOME_MESSAGE)
    })

    it('should create user', async () => {
        const response = await request.post('/users').send(userPayload).set(contentTypeJSON)
        expect(response.statusCode).to.equal(200)
        expect(response.body.name).to.equal(userPayload.name)
        expect(response.body.age).to.equal(userPayload.age)
        expect(response.body.role).to.equal(userPayload.role)
        expect(response.body.message).to.equal(RECORD_CREATED_MESSAGE)
        expect(response.body.id).is.not.null
        expect(response.body.id).to.satisfy(String)
        userID = response.body.id
    })

    it('should get all users', async () => {
        const response = await request.get('/users')
        expect(response.body).not.to.be.empty
    })

    it('should get user by /:id', async () => {
        const response = await request.get(`/users/${userID}`)
        expect(response.statusCode).to.equal(200)
        expect(response.body.name).to.equal(userPayload.name)
        expect(response.body.age).to.equal(userPayload.age)
        expect(response.body.role).to.equal(userPayload.role)
    })

    it('should update user by /:id', async () => {
        const response = await request.patch(`/users/${userID}`).send(updateUserPayload).set(contentTypeJSON)
        expect(response.statusCode).to.equal(200)
        expect(response.body.name).to.equal(updateUserPayload.name)
        expect(response.body.age).to.equal(updateUserPayload.age)
        expect(response.body.role).to.equal(updateUserPayload.role)
        expect(response.body.message).to.equal(RECORD_UPDATED_MESSAGE)
    })

    it('should delete user by /:id', async () => {
        const response = await request.delete(`/users/${userID}`)
        expect(response.text).to.equal(RECORD_DELETED_MESSAGE(userID))
    })

})