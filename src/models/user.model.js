const mongoose =  require("mongoose");


const userModel = new mongoose.Schema(
    {
        username: {
            type: String,

        },
        email: {
            type: String,
            unique:  true,
            required:  true
        },
        image: {
            type: String,
            default: "http:image.com"
        }
    }
);

module.exports =  userModel;

