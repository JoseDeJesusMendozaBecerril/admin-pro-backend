const { response } = require('express');
const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) => {
    const errores = validationResult(req); //crear un arreglo de errores que pasaron en la ruta

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    next();

}


module.exports = {
    validarCampos
}