const Bike = require('../models/bike');

//On récupère le bike
exports.getAllBike = (req,res,next)=>{
     Bike.find()
    .then(bike=>res.status(200).json(bike))
        
    .catch(err =>{
        res.json({message:err})
    })
};

//Onrécupère un bike
exports.getOneBike = (req,res,next) => {
    Bike.findById(req.params.bikeId)
        .then(bike=>res.status(200).json(bike))
   
    .catch(err =>{
        res.json({message: err});
    })
    
}

// On ajoute un bike
exports.postBike= (req,res,next) => {
    const post = new Bike({
        ...req.body
    });
    post.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message: err})
    })
}

//On supprime
exports.deleteBike =(req,res,next) => {
    Bike.findById(req.params.bikeId)
        .then(bike=>{
            Bike.remove({_id:req.params.bikeId})
            .then(() =>res.status(200).json({message:'Objet supprimé'}))
            .catch(err =>res.json({message: err}));
        })
}

//On modifie
exports.updateBike =(req,res,next)=>{
    
}