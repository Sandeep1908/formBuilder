import mongoose from 'mongoose'

const clozeSchema = new mongoose.Schema(
    {
        sentence: {
            type:String,
        },
        options: []
    },

    {
        timestamps:true
    }
);

const clozeTest = mongoose.model('clozeTest', clozeSchema);

export default clozeTest