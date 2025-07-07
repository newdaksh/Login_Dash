// mongoose import - MongoDB database se interact karne ke liye & to define schema
import mongoose from 'mongoose';

// bcrypt import - password hash karne ke liye
import bcrypt from "bcrypt";


// User schema define karna hai
const userSchema = new mongoose.Schema ({

    firstName : {
        type: String,
        required: true,
        trim: true, // removes whitespaces
    },

    lastName : {
        type: String,
        required: true,
        trim: true,
    },

    fullName : {
        type: String,
        trim: true,
    },

    email : {
        type: String,
        required: true,
        trim: true,
        unique: true, // 2 users can not have same email
        lowercase: true,
        // match: REGEX doubt
    },

    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        // match: REGEX doubt
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"], // enum : user defined data types -- in radio box later
    },

    languages: {
        type: String,
        enum: ['c', 'laravel', 'node', 'express'], // enum : user defined data types -- in checkbox later
    },

    country: {
        type: String,
        required: true,
        enum: ['India', 'USA', 'Canada', 'UK', 'Australia', 'Germany', 'Japan', 'Other']
    },

    resume: {
        type: String, // Will store the path to the uploaded resume file
        default: "",
    },

    password: {
        type: String, // Will store the hashed password
    },

})



// Hash passwords before saving -- using bcrypt

userSchema.pre('save', async function(next){
    
    if (!this.isModified('password')) return next();

    try {
    // salt generation
     const salt = await bcrypt.genSalt(10);
    
    //
     this.password = await bcrypt.hash(this.password, salt);
    } 
    
    catch (error) {
        // Inform mongoose, that to continue save process after checking errors in hashing
        next(error);    
    }

});


// Method to compare password

userSchema.methods.comparePassword = async function(candidatePassword)
{
    return bcrypt.compare(candidatePassword, this.password);
};



// Method to generate fullName
userSchema.pre('save', function(next)
{
    if(this.firstName && this.lastName)
    {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    next(); // tells mongoose that this hook work is completed, and now doc can be saved
});


// convert user schema to MongoDB model to use CRUD operations
const User = mongoose.model('crud_octal', userSchema);


// exporting User model to use it anywhere in our project
export default User;
