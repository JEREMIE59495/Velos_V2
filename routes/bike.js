const express = require('express');
const Bike = require('../models/bike');
const router = express.Router();
const bikeCtrl = require('../controllers/bike');


//Récupère  toute les données de la db


router.get('/', bikeCtrl.getAllBike);
router.post('/',bikeCtrl.postBike);
router.get('/:bikeId',bikeCtrl.getOneBike);
router.delete('/:bikeId',bikeCtrl.deleteBike);
//router.patch('/:bikeId',bikeCtrl.updateBike);
//modification

router.patch('/:bikeId', async (req,res) =>{
    try{
        const updateBike = await Bike.updateOne({_id:req.params.bikeId}, {$set: {}})
        res.json(updateBike)
    }catch(err){
        res.json({message: err});
    }
   
})




module.exports = router;