import { expect } from 'chai';
import supertest from 'supertest';
import { contentTypeJSON, updatePayload, userPayload } from '../payload/users.js';

const request = supertest('http://localhost:5000')

let userID;

describe('Test users services', () => {

    it('should validate welcome text', async () => {
        const response = await request.get('/')
        expect(response.text).to.equal('Welcome to ExpressJS Homepage!!!')
    })

    it('should create user', async () => {
        const response = await request.post('/users').send(userPayload).set(contentTypeJSON)
        expect(response.statusCode).to.equal(200)
        expect(response.body.name).to.equal(userPayload.name)
        expect(response.body.age).to.equal(userPayload.age)
        expect(response.body.role).to.equal(userPayload.role)
        expect(response.body.message).to.equal("record created!!")
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

    it('should get update user by /:id', async () => {
        const response = await request.patch(`/users/${userID}`).send(updatePayload).set(contentTypeJSON)
        expect(response.statusCode).to.equal(200)
        expect(response.body.name).to.equal(updatePayload.name)
        expect(response.body.age).to.equal(updatePayload.age)
        expect(response.body.role).to.equal(updatePayload.role)
        expect(response.body.message).to.equal("record updated!!")
    })

    it('should delete user by /:id', async () => {
        const response = await request.delete(`/users/${userID}`)
        expect(response.text).to.equal(`User with ID ${userID} record deleted!!!`)
    })

})