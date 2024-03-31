import express from 'express'
import {createError} from "../utils/error.js";
import {
    countByCity,
    countByType,
    createHotel,
    deleteUser,
    getAllHotels,
    getHotel, getHotelRooms,
    updateHotel
} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router()
//CREATE
router.post('/', verifyAdmin, createHotel)
//UPDATE
router.put('/:id', verifyAdmin, updateHotel)
//DELETE
router.delete('/:id', verifyAdmin, deleteUser)
//GET
router.get('/find/:id', getHotel)
//GET ALL
router.get('/', getAllHotels)

router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
router.get('/room/:id',getHotelRooms)

export default router

