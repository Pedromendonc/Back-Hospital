import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
const cors = require('cors');
const router = Router();

router.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});

router.get('/', HomeController.testeconexao);
router.get('/hospitais', HomeController.Hospitais);
router.get('/onehandlehospital', HomeController.umHospital);
router.get('/hospitalaleatorio', HomeController.hospitalAleatorio);
router.post('/newhospital', HomeController.newHospital);
router.put('/updatehospital', HomeController.updateHospital);
router.delete('/delethospital', HomeController.deleteHospital);
  
export default router;








