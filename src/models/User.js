import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
      },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
      subscription: {
        type: [Object],
        default: []
      },
      courseId: {
        type: [String],
        default: [],
      },
      token: { type: String },
},
{
    versionKey: false,
    timestamps: true
})


// const User = mongoose.model('user', userSchema);

const User = models.user || model('user', userSchema);
export default User