const express = require('express')
const planet = require('../Models/planet')
const router = express.Router()
const Planet = require("../Models/planet")


router.get("/", async (req,res) => {
    try{
        const planets = await Planet.find()
        res.json(planets)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
})


router.get("/:title", getPlanet, (req,res) => {
    res.json(res.planet)
})


router.post("/",async (req,res) => {
    const planet = new Planet({
        title : req.body.title,
        short_description : req.body.short_description,
        description : req.body.description,
        image_url : req.body.image_url,
        model_url :req.body.model_url ,
        wiki_url : req.body.wiki_url,
        number_of_moon : req.body.number_of_moon,
        day : req.body.day,
        physical_characteristics : req.body.physical_characteristics,
        mean_diameter : req.body.mean_diameter,
        surface_area : req.body.surface_area,
        volume :req.body.volume ,
        mass : req.body.mass,
        mean_density : req.body.mean_density,
        surface_gravity : req.body.surface_gravity,
        composition : req.body.composition,
        

    })

    try{
        const newPlanet = await planet.save()
        res.status(201).json(newPlanet)
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.patch("/:title", getPlanet, async(req,res) => {
    if(req.body.title != null){
        res.planet.title = req.body.title
    }
    if(req.body.short_description != null){
        res.planet.short_description = req.body.short_description
    }
    if(req.body.description != null){
        res.planet.description = req.body.description
    }
    if(req.body.image_url != null){
        res.planet.image_url = req.body.image_url
    }
    if(req.body.model_url != null){
        res.planet.model_url = req.body.model_url
    }
    if(req.body.wiki_url != null){
        res.planet.wiki_url = req.body.wiki_url
    }
    if(req.body.number_of_moon != null){
        res.planet.number_of_moon = req.body.number_of_moon
    }
    if(req.body.day != null){
        res.planet.day = req.body.day
    }
    if(req.body.physical_characteristics != null){
        res.planet.physical_characteristics = req.body.physical_characteristics
    }
    if(req.body.mean_diameter != null){
        res.planet.mean_diameter = req.body.mean_diameter
    }
    if(req.body.surface_area != null){
        res.planet.surface_area = req.body.surface_area
    }
    if(req.body.volume != null){
        res.planet.volume = req.body.volume
    }
    if(req.body.mass != null){
        res.planet.mass = req.body.mass
    }
    if(req.body.mean_density != null){
        res.planet.mean_density = req.body.mean_density
    }
    if(req.body.surface_gravity != null){
        res.planet.surface_gravity = req.body.surface_gravity
    }
    if(req.body.composition != null){
        res.planet.composition = req.body.composition
    }

    try{
        const updatedPlanet = await res.planet.save()
        res.json(updatedPlanet)

    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.delete("/:title", getPlanet, async(req, res) => {
    try {
      await res.planet.deleteOne()
      res.json({ message: "Deleted Planet" })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  
  
  
  
async function getPlanet(req, res, next) {
    let planet
    try {
      planet = await Planet.findOne({ title: req.params.title })
      if (!planet) {
        return res.status(404).json({ message: "Cannot find planet" })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  
    res.planet = planet
    next()
  }
  

  
  

module.exports = router;