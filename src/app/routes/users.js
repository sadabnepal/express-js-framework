import express from 'express';
import { createUser, deleteUserById, findUserByID, getUsers, updateUser } from '../controllers/users.js';
const router = express.Router()

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', findUserByID)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUserById)

export default router;