import ClozeTest from "../models/cloze.models.js";

export const createClozeTest = async (req, res) => {
    try {
        const { sentence, options } = req.body;

        if (!sentence || !options) {
            return res.status(400).json({ error: 'OOPs Error!! Both sentence and options are required' });
        }

        const clozeTest = new ClozeTest({ sentence, options });

        const savedClozeTest = await clozeTest.save();

        res.status(201).json(savedClozeTest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


export const getClozeTest = async (req, res) => {
    try {

        const clozeTest = await ClozeTest.find();

        if (!clozeTest) {
            return res.status(404).json({ error: 'ClozeTest not found' });
        }

        res.status(200).json(clozeTest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};