import {model, Schema} from "mongoose";
const SnackSchema = new Schema(
    {
        title:{
            type: String,
            required: [true, "Title must be required"],
            minlength: [2, "Title must be at least 2 characters long"],
            maxlength: [255, "Title must be less than 255 characters"]
        },
        imgUrl:{
            type: String,
            required: [true, "image url must be required"]
        },
        price:{
            type: Number,
            required: [true, "Price must be required"],
            min: [0, "Price must be positive"]
        },
        isAvailable:{
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

const Snack = model("Snack", SnackSchema)
export default Snack;