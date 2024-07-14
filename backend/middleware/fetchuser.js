var jwt = require('jsonwebtoken');
const jWT_Secrete="harryisgoodb$oy";


const fetchuser = (req , res , next) => { // has 3 values next for the (next middle ware)
    // get the user from the jwt token and add id to the req
    // calling the token here (from the header)
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please Authenticate"}) // access denied 
    }
    // if token not valid
    try {
        const data = jwt.verify(token , jWT_Secrete);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please Authenticate"})    
    }
}
module.exports = fetchuser;