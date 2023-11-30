import mongoose from "mongoose";

const categoryItemsSchema = new mongoose.Schema(
    {
        description: {
            type:String,
            required:true
        },
        
        Categorize: {
            type: Object,
            required: true,
        },
    },
    {
        timestamps:true
    }
);

const Categorize = mongoose.model('Categorize', categoryItemsSchema);

export default Categorize