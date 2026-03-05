import express from 'express'
import { getData,getSetsId } from './qweries.js'


export const route = express()

route.get("/movies", async (req, res) => {
    res.json(await getData())
})


route.get("/purchases/:id",async(req,res)=>{
    const {id} = req.params
    res.json(await getSetsId(id))
})