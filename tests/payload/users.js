import faker from 'faker'

export const contentTypeJSON = { "content-type": "application/json" }

export const userPayload = {
    name: faker.name.findName(),
    age: faker.datatype.number(30),
    role: faker.name.jobTitle()
}

export const updatePayload = {
    name: faker.name.findName(),
    age: faker.datatype.number(30),
    role: faker.name.jobTitle()
}