import express from 'express'
import { getData,getSetsId } from './qweries.js'


export const route = express()

route.get("/movies", async (req, res) => {
    res.json(await getData())
})


route.get("/purchases",async(req,res)=>{
    res.json(await getSetsId())
})