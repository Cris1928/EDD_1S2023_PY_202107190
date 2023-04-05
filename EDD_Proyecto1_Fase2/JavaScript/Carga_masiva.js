import {AVL} from "./Estudiantes.js";
//import { userObtenido } from "./main.js";btn-primaryT

let avl = new AVL();
var contenidoEstudiantesJSON = []
window.addEventListener("load", () => {
    document
        .getElementById("inputFile")
        .addEventListener("change", abrirEstudiantesJSON)
})

window.addEventListener("load", () => {
    document
        .getElementById("btn-cargar-alumnos")
        .addEventListener("click", cargarEstudiantes)
})

window.addEventListener("load", () => {
    document
        .getElementById("btn-avl")
        .addEventListener("click", GraficaraEstudiantes)
})

window.addEventListener("load", () => {
    document
        .getElementById("btn-primaryT")
        .addEventListener("click", showStudentsForm)
})

function abrirEstudiantesJSON(evento) {  
    let archivo = evento.target.files[0]
  // alert(evento.target) JSON.stringify
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
        //    console.log(contenido)
            contenidoEstudiantesJSON = JSON.parse(contenido).alumnos;
            
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se seleccionó ningún archivo")
    }

}



function cargarEstudiantes() {
   // alert("Cargando Estudiantes...!!")
    contenidoEstudiantesJSON.forEach(e => {
        avl.insertar(e.carnet, e.nombre,e.password)

    
    })
    localStorage.setItem("avlTree", JSON.stringify(avl))
    $('#studentsTable tbody').html(
        contenidoEstudiantesJSON .map((item, index) => {
            return(`
                <tr>
                    <th style="color:black">${item.carnet}</th>
                    <td style="color:black">${item.nombre}</td>
                    <td style="color:black">${item.password}</td>
                </tr>
            `);
        }).join('')
    )
    alert('Alumnos cargados con éxito!')
}

function GraficaraEstudiantes(){
    avl.graficar(avl.root)
}


function showStudentsForm(e){
    let selectAlumno=document.getElementById("traversal");
    let alumno=selectAlumno.options[selectAlumno.selectedIndex].value;
    console.log(alumno)
    if(alumno=="inOrder"){
        $('#studentsTable tbody').html(
            avl._recorridoInOrden(avl.root)
        )
    }else if(alumno=="preOrder"){
        $('#studentsTable tbody').html(
        avl._recorridoPreOrden(avl.root)
        )
    }else if(alumno=="postOrder"){
        $('#studentsTable tbody').html(
            avl._recorridoPostOrden(avl.root)
        )
    }

      
}

function showLocalStudents(){
    let temp = localStorage.getItem("avlTree")
    avl.root = JSON.parse(temp).root
    $('#studentsTable tbody').html(
        avl._recorridoInOrden(avl.root)
    )
}

function buscarUsuario(nombree, passwordd){
    let temp = localStorage.getItem("avlTree")
    avl.root = JSON.parse(temp).root;
    if (nombree !== null && passwordd !== null){
        let usuario = avl.buscar(nombree, passwordd);
    
    if(usuario == null){
      //  alert("Usuario no encontrado");
        return false;
    }else{
    //    alert("Usuario encontrado");
        return true;
    }
}
}

$( document ).ready(showLocalStudents);
export{avl}