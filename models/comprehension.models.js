import mongoose from "mongoose";

const comprehensionSchema = new mongoose.Schema(
    {
        comprehension: {
            type:String,
            required:true
        },

        mcqs: [
            {
            question: String,
            options: [String]
            }
    ]
    } 

);

const comprehensionTest = mongoose.model('comprehensionTest', comprehensionSchema);

export default comprehensionTest