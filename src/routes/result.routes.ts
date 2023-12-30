import express from 'express';
import { ResultController } from '../controllers/resultController';

const resultRouter = express.Router();
const resultController = new ResultController();

resultRouter.post('/create-result', resultController.createResult.bind(resultController));
resultRouter.get('/results', resultController.listResults.bind(resultController));
resultRouter.delete('/delete-result/:id', resultController.deleteResult.bind(resultController));

export default resultRouter;
