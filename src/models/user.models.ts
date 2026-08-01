import mongoose, {Schema, Document} from "mongoose";
 export interface IUser extends Document{
   googleId: string;
   email: string;
   verifierId: string,
   avatar?: string

 }
const userSchema = new Schema<IUser>({
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
   },
   avatar:{
      type: String,

   }


},{timestamps:true})

const User = mongoose.model<IUser>("User",userSchema)
export default User