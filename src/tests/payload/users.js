import { faker } from "@faker-js/faker"

export const contentTypeJSON = { "content-type": "application/json" }

export const userPayload = {
    name: faker.name.findName(),
    age: faker.datatype.number(30),
    role: faker.name.jobTitle()
}

export const updateUserPayload = {
    name: faker.name.findName(),
    age: faker.datatype.number(30),
    role: faker.name.jobTitle()
}