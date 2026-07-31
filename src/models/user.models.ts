import mongoose, {Schema} from "mongoose";
 
const userSchema = new Schema({
   googleId:{
    type: String,
    required: true,
    unique: true
   },
   email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true
   },
   verifierId:{
      type: String,
      required: true,
      unique: true
   }


},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User