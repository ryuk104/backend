import mongoose from "mongoose"

const schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const mediapostSchema = new schema({
    userId:{
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    desc:{
      type:String
    },
    profilepicture:{
        type:String,
        default:""
    },
    img: {
        type: String,
    },
    video: {
        type: String,
    },
    likes: {
        type: Array,
    }, 
    comments: {
        type: Array,
    }
  });

export default mongoose.model('mediapost', mediapostSchema);
