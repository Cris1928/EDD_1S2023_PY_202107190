import{avl} from './Carga_masiva.js';
document.getElementById("btn-ingresar").onclick = login
document.getElementById("cerrar-sesion").onclick = cerrarSesion
document.getElementById("cerrar-sesion2").onclick = cerrarSesion

/** Funcionalidades para los botones de la navbar del administrador */
document.getElementById("nav-carga-masiva-admin").onclick = mostrarCargaMasiva
document.getElementById("grafo-avl").onclick = mostrarGrafo_AVL
document.getElementById("vista-carpetas").onclick = mostrarArbol_N
document.getElementById("vista-usuarios").onclick = mostrarUsuario

var user, pass, check, bolean

let userObtenido
window.userObtenido = '';

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
    window.userObtenido  = user
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
    let temp = localStorage.getItem("avlTree")
    avl.root = JSON.parse(temp).root;
    if (nombree !== null && passwordd !== null){
        let usuario = avl.buscar(nombree, passwordd);
        return usuario;
}

}



function descargarGrafo_AVL() {
    html2canvas($('#descargar-AVL')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}

export {userObtenido}