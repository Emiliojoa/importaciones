import { validationResult} from 'express-validator'

 const controldador = ( req, res, next) =>{
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores);
    }
    next();
}
export default controldador
