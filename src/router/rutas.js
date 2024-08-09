import {Router} from 'express'
import {obtenerId, agregar, obtener, actualizar, eliminar } from '../controllers/controladores.js'
import controldador from'../middleware/middlewareValidations.js'
import {validateTask} from '../controllers/validation.js'

const router = Router()


router.get('/', obtener)
router.post('/',validateTask, controldador, agregar)
router.put('/:id',actualizar)
router.delete('/:id',eliminar)
router.get('/:id', obtenerId)


export default router;

//export {
//cosa 1, cosa2
 //   router
//}
