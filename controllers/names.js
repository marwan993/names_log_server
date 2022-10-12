import NameData from '../models/nameData.js';

export const getNames = async (req, res) => {
    try {
        const nameData = await NameData.find();
                
        res.status(200).json(nameData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const addName = async (req, res) => {
    const { firstName, lastName } = req.body;

    const newNameAdd = new NameData({ firstName, lastName })

    try {
        await newNameAdd.save();

        res.status(201).json(newNameAdd );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};