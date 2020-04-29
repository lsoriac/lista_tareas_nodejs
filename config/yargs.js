const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descipción de la tarea'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    //.help()
    .argv

module.exports = {
    argv
}