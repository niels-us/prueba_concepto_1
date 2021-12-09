const express = require('express');
const ProcesosService = require('../services/procesos');

function procesosApi(app) {
    const router = express.Router();
    app.use('/procesos', router);

    const procesosService = new ProcesosService();

    router.get('/', async function (req, res, next) {
        const { tags } = req.query;

        try {
            const procesos = await procesosService.get({ tags });

            res.status(200).json({
                status: true,
                content: procesos
            });

        } catch (err) {
            next(err);
        }
    });

    router.post('/', async function (req, res, next) {
        const { body: proceso } = req;
        try {
            const createProcesoId = await procesosService.createProceso({ proceso });

            res.status(201).json({
                status: true,
                content: 'proceso creado'
            });

        } catch (err) {
            next(err);
        }
    });

    router.put('/:procesoId', async function (req, res, next) {
        const { procesoId } = req.params;
        const { body: proceso } = req;

        try {
            const updateProcesoId = await procesosService.updateProceso(
                {
                    procesoId,
                    proceso
                }
            );

            res.status(201).json({
                status: true,
                content: 'proceso actualizado'
            });

        } catch (err) {
            next(err);
        }
    });

    router.delete('/:procesoId', async function (req, res, next) {
        const { procesoId } = req.params;

        try {
            const deleteProcesoId = await procesosService.deleteProceso({ procesoId });

            res.status(200).json({
                status: true,
                content: 'proceso eliminado'
            });

        } catch (err) {
            next(err);
        }
    });
}

module.exports = procesosApi;