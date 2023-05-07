import{avl} from './Carga_masiva.js';
import {Tree} from './n-ary-tree.js';
import{listaSimple} from './Chat.js';

//const flatted = require('flatted');
import { ListaCircular } from "./Lista_circularS.js";
console.log("nuevo avl importad" )
document.getElementById("btn-ingresar").onclick = login
document.getElementById("cerrar-sesion").onclick = cerrarSesion
document.getElementById("cerrar-sesion2").onclick = cerrarSesion2

/** Funcionalidades para los botones de la navbar del administrador */
document.getElementById("nav-carga-masiva-admin").onclick = mostrarCargaMasiva
document.getElementById("grafo-avl").onclick = mostrarGrafo_AVL
document.getElementById("vista-carpetas").onclick = mostrarArbol_N
document.getElementById("vista-usuarios").onclick = mostrarUsuario
//document.getElementById("vista-archivos").onclick = mostrarBitacora
document.getElementById("vista-permisos").onclick = mostrarMatriz
document.getElementById("grafo-tablaH").onclick = mostrarGrafo_HashTable
document.getElementById("vista-archivos").onclick =BlockChain
window.listaPersonas = new listaSimple();
var user, pass, check, bolean
//window.archivos=[];
let contra=null;
 window.temporada=[];
window.temporal=null;
let userObtenido;
window.userObtenido = '';
let treee;
window.treee = null;
window.lis = null;
window.s=null;
window.temporal=avl;

//window.temporada=JSON.parse(localStorage.getItem("avlTree"));
function login() {
    bolean = false
    user = document.getElementById("usser").value
    pass = document.getElementById("password").value
    check = document.getElementById("check-box").checked

    if (check) {
        bolean = true
    } 

    if (user === "admin" && pass === "admin" && bolean === true) {
        window.userObtenido = user
      //  module.exports = userObtenido
        document.getElementById("login").style.display = "none"
        document.getElementById("navbar-administrador").style.display = "block"
        document.getElementById("administrador").style.display = "block"
        document.getElementById("mostrar-grafo-avl").style.display = "none"
        document.getElementById("navbar-usuario").style.display = "none"
        document.getElementById("usuario").style.display = "none"
        document.getElementById("arbol-n").style.display = "none"
        document.getElementById("arbol-b").style.display = "none"
        document.getElementById("matriz").style.display = "none"
        document.getElementById("mostrar-grafo-hashtable").style.display = "none"
        document.getElementById("BlockChain").style.display = "none"

     
    }
    //agregar metodo local storage
    else if (user === "User1" && pass === "123" && bolean === false) {
        window.userObtenido = user
     //   module.exports = userObtenido
        document.getElementById("login").style.display = "none"
        document.getElementById("navbar-administrador").style.display = "none"
        document.getElementById("administrador").style.display = "none"
        document.getElementById("mostrar-grafo-avl").style.display = "none"
        document.getElementById("navbar-usuario").style.display = "block"
        document.getElementById("usuario").style.display = "block"
        document.getElementById("arbol-n").style.display = "none"
        document.getElementById("arbol-b").style.display = "none"
        document.getElementById("matriz").style.display = "none"

    }
   
  // else if ((user,pass) === true && bolean === false){
    else if (buscarUsuario(user) === true && bolean === false){
    contra=pass;
    window.userObtenido  = user
    //console.log(window.treee)
        document.getElementById("login").style.display = "none"
        document.getElementById("navbar-administrador").style.display = "none"
        document.getElementById("administrador").style.display = "none"
        document.getElementById("mostrar-grafo-avl").style.display = "none"
        document.getElementById("navbar-usuario").style.display = "block"
        document.getElementById("usuario").style.display = "block"
        document.getElementById("arbol-n").style.display = "none"
        document.getElementById("arbol-b").style.display = "none"
        document.getElementById("matriz").style.display = "none"
        document.getElementById("mostrar-grafo-hashtable").style.display = "none"
        document.getElementById("BlockChain").style.display = "none"

    }

    else {
        alert("Usuario o contraseña incorrectos")
    }

    document.getElementById("password").value = ""
    document.getElementById("check-box").checked = false
}

function cerrarSesion() {
    document.getElementById("login").style.display = "block"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "none"


    document.getElementById("usser").value = ""
    document.getElementById("password").value = ""
    document.getElementById("check-box").checked = false
}
function cerrarSesion2() {
    localStorage.setItem("avlTree", JSON.stringify(avl))
    document.getElementById("login").style.display = "block"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "none"
 //   localStorage.setItem("avlN", JSON.stringify(window.treee))
 console.log("para.....")
    console.log(document.getElementById("usser").value)
    console.log(document.getElementById("password").value)
    console.log("cierra")
    console.log(window.treee.root)
    avl.setRoot(document.getElementById("usser").value,contra,JSON.stringify(window.treee))
   // console.log(JSON.stringify(window.lis))
   // const json = stringify(window.lis)JSON.decycle(
   // avl.setLista(document.getElementById("usser").value,contra,JSON.stringify(JSON.decycle(window.lis)))
   // console.log("para ver el avl")
    //console.log(avl)
    avl.Set_tree_hash(document.getElementById("usser").value,JSON.stringify(window.treee))
    localStorage.setItem("avlTree", JSON.stringify(avl))
    
    document.getElementById("usser").value = ""
    document.getElementById("password").value = ""
    document.getElementById("check-box").checked = false
}


function BlockChain(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "block"

}

function mostrarCargaMasiva() {
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "block"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "none"
}

function mostrarGrafo_AVL() {
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "none"
    avl.ejecutarCerrar()
    window.listaPersonas.ordenamientoBurbuja()
        window.listaPersonas.recorrerLista()
//listaPersonas.graficarDot()
window.listaPersonas.graficar()
    
}

function mostrarArbol_N(){

    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "block"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "none"

}

function mostrarUsuario(){

    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "block"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "none"

}

function mostrarBitacora(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "block"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "none"
}
 
function mostrarMatriz(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "block"
    document.getElementById("mostrar-grafo-hashtable").style.display = "none"
    document.getElementById("BlockChain").style.display = "none"
}



function mostrarGrafo_HashTable(){
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-b").style.display = "none"
    document.getElementById("matriz").style.display = "none"
    document.getElementById("mostrar-grafo-hashtable").style.display = "block"
    document.getElementById("BlockChain").style.display = "none"
    
}

function buscarUsuario(nombree, passwordd){
    let tres = new Tree();
    let list = new ListaCircular();
    let temp = localStorage.getItem("avlTree")
    //console.log(temp)
    avl.root = JSON.parse(temp).root;
    if (nombree !== null && passwordd !== null){
      
        console.log("entra")
        let usuario = avl.buscar(nombree, passwordd);

        let usuario2 = avl.busquedaHash(nombree);

        console.log(usuario2);
      //  avl.busquedaHash("199919737");
        console.log("momstrar usuarios aqui");
        //avl.mostrarUsuarios();
    //    console.log("aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii usuario");
///console.log(usuario);
if(usuario2 === true){
       // let vari =avl.returnRoot(nombree, passwordd);
       let vari = avl.return_tree_hash(nombree);
        console.log("aquiiiiiiiiiiiiiii");
        console.log(vari+"aqui---------------------......."); 
        window.treee=JSON.parse(vari);
        //window.treee=JSON.parse(vari).root;
        console.log(window.treee);
       
        




       // window.treee=tres;
        console.log("igualan1")
        Object.defineProperty(window.treee, 'insert', {
            value: tres.insert,
            writable: true,
            enumerable: true,
            configurable: true
            });

            Object.defineProperty(window.treee, 'getFolder', {
                value: tres.getFolder,
                writable: true,
                enumerable: true,
                configurable: true
                });
            
                Object.defineProperty(window.treee, 'getHTML', {
                    value: tres.getHTML,
                    writable: true,
                    enumerable: true,
                    configurable: true
                    });

                    Object.defineProperty(window.treee, 'graph', {
                        value: tres.graph,
                        writable: true,
                        enumerable: true,
                        configurable: true
                        });

                        Object.defineProperty(window.treee, 'buscarCarpeta', {
                            value: tres.buscarCarpeta,
                            writable: true,
                            enumerable: true,
                            configurable: true
                            });

                            Object.defineProperty(window.treee, 'buscarArchivo', {
                                value: tres.buscarArchivo,
                                writable: true,
                                enumerable: true,
                                configurable: true
                                });}
       // console.log(window.treee);

        return usuario2; 
}

}


function descargarGrafo_AVL() {
    html2canvas($('#descargar-AVL')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}

export {userObtenido,treee}
