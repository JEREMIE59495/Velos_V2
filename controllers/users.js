const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

exports.signup = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash =>{
        const user = new User({
            email: req.body.email,
            password: hash
        });  
        console.log(user)
        user.save()
        .then(()=> res.status(201).json({message: 'utilisateur crée !!'}))
        .catch(error => res.status(400).json({error}));
    })
    .catch(error => res.status(500).json({error}));
}
// CONNEXION
console.log('yiyi')
exports.login = (req, res, next)=>{
    User.findOne({email: req.body.email})
     //console.log('ici',email)
    .then(user => {
        //console.log('ici',user)
        if (!user){
            return status(401).json({error:'Utilisateur non trouvé '})
        }
        bcrypt.compare( req.body.password, user.password)
        //console.log(req.body.password)
        //console.log(user._id)
        .then(valid => {
            console.log(valid)
            if (!valid) {
                return status(401).json({error:'mot de passe incorrect '})
            }
            res.status(200).json({
                userId: user._id,
    
                token:jwt.sign(
                    {userId: user._id},
                    process.env.TOKEN,
                    {expiresIn: '24h'}
                )
            });
        })
        .catch(error => res.status(500).json({message:'Connexion refusée'}));
    })
   // console.log(user)
        .catch(error => res.status(500).json({error}));
}