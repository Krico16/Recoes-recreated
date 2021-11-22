const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretPhrase = process.env.JWT_SECRET || 'SECRET'

module.exports = {
    verifyToken(req,res,next){
        const authHeader = req.headers.authorization

        if(authHeader){
            const token = authHeader.split(' ')[1]
            jwt.verify(token,secretPhrase,(err,data)=>{
                if(err){
                    return res.status(403).json({done:false,message:""})
                }
                req.user = data
                next()
            })   
        }else{
            res.status(403).json({done:false,message:""})
        }
    }
}