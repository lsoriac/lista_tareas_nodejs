const argv = require('./config/yargs').argv
    //tarea es un objeto
const tareas = require('./controlador/tareas_por_hacer')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let lista = tareas.get_lista();
        console.log("=============TAREAS==========");

        for (let tarea of lista) {
            console.log(tarea.descripcion);

            console.log(tarea.completado);
            console.log("\n");
        }
        console.log("=============================");
        break;
    case 'actualizar':
        let res = tareas.actualizar(argv.descripcion, argv.completado)
        console.log(res);

        break;
    case 'borrar':
        let resp = tareas.borrar(argv.descripcion)
        console.log(resp);
        break;
    default:
        'comando no reconocido'
}