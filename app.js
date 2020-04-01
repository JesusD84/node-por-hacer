/*
-------Comandos-------
crear
listar
actualizar

------Argumentos------
-d:     description: String
-c:     completed: Boolean
*/

const { argv } = require("./config/yargs");
const porHacer = require("./por-hacer/por-hacer");
const color = require('colors');

let comando = argv._[0]
switch(comando) {
    case 'crear':
        console.log("Creando tarea nueva: ");
        let tarea = porHacer.crear(argv.description);
        console.log(tarea.description);
        break;
    case 'listar':
        console.log("Lista de tareas: ");
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======================='.green);
            console.log(tarea.description);
            console.log("Completado?: ",tarea.completed);
            console.log('======================='.green);
        }
        break;
    case 'actualizar':
        console.log("Actualizando tarea: ", argv.d);
        let actualizado = porHacer.actualizar(argv.description, argv.completed);
        if(actualizado) {
            console.log("Actualizado con exito")
        } else {
            console.log(`Error: Tarea '${argv.d} no existe'`);
        }
        break;
    case 'borrar':
        console.log("Borrando tarea: ", argv.d);
        let borrado = porHacer.borrar(argv.description);
        if(borrado) {
            console.log("Borrado con exito")
        } else {
            console.log(`Error: Tarea '${argv.d} no existe'`);
        }
        break;
    default:
        console.log("Comando no reconocido");
}