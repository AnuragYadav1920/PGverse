import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    username:{
        type:String,
        required: [true, "Please provide a username"],
        unique: true
    },
    email:{
        type:String,
        required: [true, "Please provide an email"],
        unique: true
    },
    phone:{
        type:String,
        required: [true, "Please provide a phone no"],
        unique: true 
    },
    password:{
        type:String,
        required: [true, "Please provide password "],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
},{timestamps:true})

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default  User;
