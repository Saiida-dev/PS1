import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';


const router = express.Router()

import { verifyUser } from '../utils/verifyToken.js';

// update User 
router.put('/:id', verifyUser ,updateUser);
// delete new User 
router.delete('/:id',verifyUser, deleteUser)
// getSingle User 
router.get('/:id', verifyUser, getSingleUser)
// getALLUsers
router.get('/',verifyUser, getAllUser)




export default router ;