const express = require('express')
const star = require('../Models/star')
const router = express.Router()
const Star = require("../Models/star")


router.get("/", async (req,res) => {
    try{
        const stars = await Star.find()
        res.json(stars)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
})


router.get("/:title", getStar, (req,res) => {
    res.json(res.star)
})


router.post("/",async (req,res) => {
    const star = new Star({
        title : req.body.title,
        short_description : req.body.short_description,
        description : req.body.description,
        image_url : req.body.image_url,
        wiki_url : req.body.wiki_url,
        
        

    })

    try{
        const newStar = await star.save()
        res.status(201).json(newStar)
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.patch("/:title", getStar, async(req,res) => {
    if(req.body.title != null){
        res.star.title = req.body.title
    }
    if(req.body.short_description != null){
        res.star.short_description = req.body.short_description
    }
    if(req.body.description != null){
        res.star.description = req.body.description
    }
    if(req.body.image_url != null){
        res.star.image_url = req.body.image_url
    }
    if(req.body.wiki_url != null){
        res.star.wiki_url = req.body.wiki_url
    }
   

    try{
        const updatedStar = await res.star.save()
        res.json(updatedStar)

    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.delete("/:title", getStar, async(req, res) => {
    try {
      await res.star.deleteOne()
      res.json({ message: "Deleted Planet" })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  
  
  
  
async function getStar(req, res, next) {
    let star
    try {
      star = await Star.findOne({ title: req.params.title })
      if (!star) {
        return res.status(404).json({ message: "Cannot find planet" })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  
    res.star = star
    next()
  }
  

  
  

module.exports = router;