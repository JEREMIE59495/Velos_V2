const mongoose =require ('mongoose');

const bikeSchema = mongoose.Schema({
    station : {type :String},
    adresse : {type: String},
    nb_dispo :{type:Number},
    nb_reserve :{type:Number},
    nb_place :{type:Number},
    nb_place_reserve:{type:Number},
    long : {type:Number},
    lat : {type:Number}, 

});

module.exports=mongoose.model('bike',bikeSchema);