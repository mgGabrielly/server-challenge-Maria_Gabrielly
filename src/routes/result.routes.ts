import express from 'express';
import { ResultController } from '../controllers/resultController'; // Certifique-se de ajustar o caminho para o seu controlador

const resultRouter = express.Router();
const resultController = new ResultController();

//const userRoutes: Router = express.Router();
//import UserController from '../controllers/userController';
// userRoutes.get("/users", UserController.getAllUsers);
resultRouter.post('/results', resultController.createResult.bind(resultController));
resultRouter.get('/results', resultController.listResults.bind(resultController));
resultRouter.delete('/results/:id', resultController.deleteResult.bind(resultController));

export default resultRouter;
