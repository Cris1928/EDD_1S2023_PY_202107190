import{avl} from './Carga_masiva.js';
import {Tree} from './n-ary-tree.js';
console.log("nuevo avl importad" )
document.getElementById("btn-ingresar").onclick = login
document.getElementById("cerrar-sesion").onclick = cerrarSesion
document.getElementById("cerrar-sesion2").onclick = cerrarSesion2

/** Funcionalidades para los botones de la navbar del administrador */
document.getElementById("nav-carga-masiva-admin").onclick = mostrarCargaMasiva
document.getElementById("grafo-avl").onclick = mostrarGrafo_AVL
document.getElementById("vista-carpetas").onclick = mostrarArbol_N
document.getElementById("vista-usuarios").onclick = mostrarUsuario

var user, pass, check, bolean
let contra=null;
 window.temporada=[];
window.temporal=null;
let userObtenido;
window.userObtenido = '';
let treee;
let s;
window.treee = null;
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

    }
   
   else if (buscarUsuario(user,pass) === true && bolean === false){
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
 //   localStorage.setItem("avlN", JSON.stringify(window.treee))
    console.log(document.getElementById("usser").value)
    console.log(document.getElementById("password").value)
    console.log("cierra")
    console.log(window.treee.root)
    avl.setRoot(document.getElementById("usser").value,contra,JSON.stringify(window.treee))
    console.log("para ver el avl")
    console.log(avl)
    localStorage.setItem("avlTree", JSON.stringify(avl))
    


    document.getElementById("usser").value = ""
    document.getElementById("password").value = ""
    document.getElementById("check-box").checked = false
}



function mostrarCargaMasiva() {
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "block"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
}

function mostrarGrafo_AVL() {
    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
    document.getElementById("arbol-n").style.display = "none"
}

function mostrarArbol_N(){

    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "none"
    document.getElementById("arbol-n").style.display = "block"

}

function mostrarUsuario(){

    document.getElementById("login").style.display = "none"
    document.getElementById("navbar-administrador").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("mostrar-grafo-avl").style.display = "none"
    document.getElementById("navbar-usuario").style.display = "block"
    document.getElementById("usuario").style.display = "block"
    document.getElementById("arbol-n").style.display = "none"

}

function buscarUsuario(nombree, passwordd){
    let tres = new Tree();
    let temp = localStorage.getItem("avlTree")
    //console.log(temp)
    avl.root = JSON.parse(temp).root;
    if (nombree !== null && passwordd !== null){
      /*  console.log(window.temporada)
        window.temporada.forEach(e => {
            //  let tree = new Tree();
              //console.log(e.carpeta_raiz)
              if(window.treee!=null){
              e.carpeta_raiz=JSON.stringify(window.treee.root)
              console.log(JSON.parse(e.carpeta_raiz).children) setRoot
            }
          
          })*/



          /*
          if(window.treee!=null){
            localStorage.setItem("avlN", JSON.stringify(window.treee))
          }*/
        console.log("entra")
        let usuario = avl.buscar(nombree, passwordd);

        let vari =avl.returnRoot(nombree, passwordd);
        console.log("aquiiiiiiiiiiiiiii");
        console.log(vari); 
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
        console.log(window.treee);

        return usuario; 
}

}


function descargarGrafo_AVL() {
    html2canvas($('#descargar-AVL')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}

export {userObtenido,treee}
