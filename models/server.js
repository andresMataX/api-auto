const express = require('express');
var cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      eventos: '/api/eventos',
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
    this.app.use(this.paths.eventos, require('../routes/eventos.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en: ${this.port}`);
    })
  }
}


module.exports = Server;