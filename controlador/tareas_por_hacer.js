//nuestra app debe usar persistenncia = datos que se almacenan en el disco

const fs = require('fs');
//crea un obj tarea y lo intorduce a tareas por hacer
//ojo este vector solo funciiona en este js
let tareas_por_hacer = [];
const cargar_db = () => {
    try {

        tareas_por_hacer = require('../modelo/data.json')


    } catch (error) {
        tareas_por_hacer = [];
    }
}

//ENCAPSULAMIENTO ----PRIVADO---no lo exporto
const guardar_db = () => {
    //hacer q una cadena de caracteres se cambie a un formato json
    let data = JSON.stringify(tareas_por_hacer);

    fs.writeFile('modelo/data.json', data, (err) => {
        if (err) throw new Error('No se puede guardar la data', err)
    })
}

const crear = (descripcion) => {
    //ojo cargmos la data para q no se sobreescriba
    cargar_db();
    let tarea = {
        descripcion,
        completado: false
    }
    tareas_por_hacer.push(tarea);

    guardar_db();
    return tarea;
}

const get_lista = () => {
    cargar_db();
    return tareas_por_hacer;
}

const actualizar = (descripcion, completado = true) => {
    cargar_db();
    let index = tareas_por_hacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareas_por_hacer[index].completado = completado;
        guardar_db();
        return true;
    }
    return false;
}

const borrar = (descripcion) => {
    cargar_db();
    let nuevo_listado = tareas_por_hacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareas_por_hacer.length === nuevo_listado.length) {
        return false;
    } else {
        tareas_por_hacer = nuevo_listado;
        guardar_db();
        return true;
    }
}

module.exports = {
    crear,
    get_lista,
    actualizar,
    borrar

}