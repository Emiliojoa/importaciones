import {Router} from 'express'
import {obtenerId, agregar, obtener, actualizar, eliminar } from '../controllers/controladores.js'

const router = Router()

router.get('/tasks', obtener)
router.post('/tasks', agregar)
router.put('/tasks/:id',actualizar)
router.delete('/tasks/:id',eliminar)
router.get('/tasks/:id', obtenerId)

export {
    router
}
