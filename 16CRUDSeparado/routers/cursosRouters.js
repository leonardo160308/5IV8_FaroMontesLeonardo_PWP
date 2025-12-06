const { Router } = require('express');
const cursosController = require('../Controllers/cursosControl.js');

const cursosRouter = Router();

cursosRouter.get('/', cursosController.getCursos);
cursosRouter.get('/:id', cursosController.getCursoById);

// ❌ COMENTA estas líneas porque NO existen aún
// cursosRouter.post('/registrar-curso', cursosController.createCurso);
// cursosRouter.put('/:id', cursosController.updateCurso);
// cursosRouter.delete('/:id', cursosController.deleteCurso);

module.exports = cursosRouter;
