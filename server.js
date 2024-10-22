const mongose=require('mongose');
const UserSchema=new mongose.Schema({
    name: {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    workType:{
        type:String,
        required:true,
        enum:['Student','Mentor','Admin']
    }
    
})
  const User=mongose.model('USER',UserSchema);
    module.exports=User;