import { v4 as uuidv4 } from 'uuid';
import { RECORD_CREATED_MESSAGE, RECORD_UPDATED_MESSAGE, RECORD_DELETED_MESSAGE } from '../../static/constants.js';

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body
    const uniqueID = uuidv4()
    users.push({ ...user, id: uniqueID })
    res.send({ ...user, id: uniqueID, message: RECORD_CREATED_MESSAGE })
}

export const findUserByID = (req, res) => {
    const id = req.params.id;
    const matchingUser = users.find(user => user.id === id);
    res.send(matchingUser)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, age, role } = req.body

    const user = users.find((user) => user.id === id);
    if (name) user.name = name
    if (age) user.age = age
    if (role) user.role = role
    res.send({ ...user, message: RECORD_UPDATED_MESSAGE })
}

export const deleteUserById = (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id)
    res.send(RECORD_DELETED_MESSAGE(id))
}