const express = require('express');
const cors = require('cors');

const dbConnection = require('../database/config.db');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      asistentes: '/api/asistentes',
      buscar: '/api/buscar',
      eventos: '/api/eventos',
    }

    this.conectarDB();

    this.middlewares();

    this.routes();
  }

  async conectarDB() { await dbConnection(); }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.asistentes, require('../routes/asistentes.routes'));
    this.app.use(this.paths.buscar, require('../routes/buscar.routes'));
    this.app.use(this.paths.eventos, require('../routes/eventos.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en: ${this.port}`);
    })
  }
}


module.exports = Server;