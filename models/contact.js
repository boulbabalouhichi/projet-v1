const mongoose=require('mongoose')
const schema=mongoose.Schema

const contactschema= new schema ({

    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
    },
    avatar:{
        type:String,
    },
    iduser:{
        type:String,
    },
    
})
const contact=mongoose.model('listofcontact',contactschema)
module.exports=contact