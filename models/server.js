const express = require('express');
var cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      alumnos: '/api/alumnos',
      asistencias: 'api/asistencias',
      eventos: '/api/eventos',
      roles: '/api/roles',
      usuarios: '/api/usuarios'
    }

    this.middlewares();

    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors())

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.paths.alumnos, require('../routes/alumnos.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en: ${this.port}`);
    })
  }
}


module.exports = Server;