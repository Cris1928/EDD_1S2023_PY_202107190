import {AVL} from "./Estudiantes.js";
//import { userObtenido } from "./main.js";btn-primaryT
import {Tree} from './n-ary-tree.js';
import { ListaCircular } from "./Lista_circularS.js";
let avl = new AVL();
console.log("nuevo avl")
//window.lista= new ListaCircular();

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
    let tree = new Tree();
localStorage.setItem("avlN", JSON.stringify(tree))
    let archivo = evento.target.files[0]
  // alert(evento.target) JSON.stringify
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
        //    console.log(contenido)
            contenidoEstudiantesJSON = JSON.parse(contenido).alumnos;

            //mostrar la raiz de cada estudiante
            contenidoEstudiantesJSON.forEach(e => {
               
                
              e.carpeta_raiz= localStorage.getItem("avlN")
             // console.log(e.carpeta_raiz)
            })

            
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se seleccionó ningún archivo")
    }

}



function cargarEstudiantes() {
   let lista= new ListaCircular();
    window.temporada=contenidoEstudiantesJSON;
   // alert("Cargando Estudiantes...!!")
   /*contenidoEstudiantesJSON.forEach(e => {
    console.log(e.carpeta_raiz)


})*/
    contenidoEstudiantesJSON.forEach(e => {
      //  let tree = new Tree();
        
        avl.insertar(e.carnet, e.nombre,e.password,e.carpeta_raiz,JSON.stringify(lista))

    
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
    var temp2 = JSON.parse(temp)
    avl.root = JSON.parse(temp).root
    console.log("verrrrr")
    console.log(avl)
    $('#studentsTable tbody').html(
        avl._recorridoInOrden(avl.root)
    )
    console.log("aqui avl1")
    console.log(avl) 
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
console.log("aqui avl") 
console.log(avl) 
$( document ).ready(showLocalStudents);
export{avl} 
