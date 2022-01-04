import express from 'express';
const router = express.Router()
import { v4 as uuidv4 } from 'uuid';

let users = []

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const userDetails = req.body
    const uniqueID = uuidv4()
    users.push({ ...userDetails, id: uniqueID })
    res.send({ ...userDetails, id:uniqueID, message: "record created!!" })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingUser = users.find(user => user.id === id);
    res.send(matchingUser)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter(user => user.id !== id)
    res.send(`User with ID ${id} record deleted!!!`)

})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, role } = req.body
    
    const user = users.find((user) => user.id === id);

    if (name) user.name = name
    if (age) user.age = age
    if (role) user.role = role

    res.send({ ...user, message: "record updated!!" })

})

export default router;