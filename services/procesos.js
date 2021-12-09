const MongoLib = require('../lib/mongo');

class ProcesosService {
    constructor() {
        this.collection = 'procesos_prueba';
        this.mongoDB = new MongoLib();
    }

    async get({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const data = await this.mongoDB.get(this.collection, query);
        return data || [];
    }

    async createProceso({ proceso }) {
        const crearProcesoId = await this.mongoDB.create(this.collection, proceso);
        return crearProcesoId;
    }

    async updateProceso({ procesoId, proceso }) {
        const updateProcesoId = await this.mongoDB.update(
            this.collection,
            procesoId,
            proceso
        );
        return updateProcesoId;
    }

    async deleteProceso({ procesoId }) {
        const deleteProcesoId = await this.mongoDB.delete(this.collection, procesoId);
        return deleteProcesoId;
    }
}

module.exports = ProcesosService;