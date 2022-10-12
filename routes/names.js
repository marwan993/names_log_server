import express from 'express';
import { getNames, addName } from '../controllers/names.js';

const router = express.Router();

router.get('/', getNames);
router.post('/', addName);

export default router;