import ComprehensionTest from "../models/comprehension.models.js";

export const createComprehension = async (req, res) => {
    try {
        const { comprehension, mcqs } = req.body;
        const comprehensionTest = new ComprehensionTest({ comprehension, mcqs });
        await comprehensionTest.save();
        res.status(201).json(comprehensionTest);
    } catch (error) {
        res.status(500).json({ error: 'OOPs.. Unable to create comprehension test' });
    }
}


export const getAllComprehensions = async (req, res) => {
    try {
        const comprehensionTests = await ComprehensionTest.find();
        res.status(200).json(comprehensionTests);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch comprehension tests' });
    }
};