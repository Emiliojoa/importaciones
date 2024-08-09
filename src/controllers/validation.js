import {body} from 'express-validator'

export const validateTask = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio'),
    body('description')
        .notEmpty().withMessage('La descripción es obligatoria'),
    body('isComplete')
        .optional().isBoolean().withMessage('El campo isComplete debe ser un booleano')
    ]
    
