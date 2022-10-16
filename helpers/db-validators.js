const Evento = require("../models/evento");

const existeEvento = async (id) => {

    const existe = await Evento.findById(id)
    if (!existe) {
        throw new Error(`El ID no existe: ${id}.`);
    }
}


module.exports = {
    existeEvento

}