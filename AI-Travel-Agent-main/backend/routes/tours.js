
import express from 'express'
import { createTour,getTourCount, deleteTour, getAllTour, getSingleTour,getFeaturedTour, updateTour , getTourBySearch } from './../controllers/tourController.js'
const router = express.Router()

import { verifyAdmin } from '../utils/verifyToken.js';
// create new tour 
router.post('/', verifyAdmin,createTour);
// update tour 
router.put('/:id', verifyAdmin,updateTour);
// delete new tour 
router.delete('/:id', verifyAdmin, deleteTour)
// getSingle tour 
router.get('/:id', getSingleTour)
// getALLTours
router.get('/', getAllTour)
// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)
// get featured tour
router.get('/search/getFeaturedTour', getFeaturedTour)

router.get('/search/getTourCount', getTourCount)


export default router ;
