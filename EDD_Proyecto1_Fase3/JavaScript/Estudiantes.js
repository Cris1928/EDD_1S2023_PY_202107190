import { ListaCircular } from "./Lista_circularS.js"
//----------------------CLASES PARA EL ARBOL AVL----------------------//
//import {Tree} from './n-ary-tree.js';
import { TablaHash } from "./hash_table.js";
window.Lusers= [];
const tablaHash = new TablaHash();
export class Estudiante{
  constructor(carnet,nombre,password,Carpeta_Raiz){
    this.nombre = nombre;
    this.carnet = carnet;
    this.password = password;
    this.Carpeta_Raiz = Carpeta_Raiz;
  }

 insertar(carnet,nombre,password,Carpeta_Raiz){
    this.nombre = nombre;
    this.carnet = carnet;
    this.password = password;
    this.Carpeta_Raiz = Carpeta_Raiz;
  }

}

class Nodo {
  
    constructor(dato,valor,pass,tree,ListaCircular) {
        this.dato = dato;
        this.valor = valor;
        this.pass = pass;
        this.tree = tree;
        this.ListaCircular = ListaCircular;
        this.izq = null;
        this.der = null;
        this.altura = 0;
    }

   

}
export class AVL{
  constructor(){
      this.root = null;
  }


//--------------------------------------------------------------------------------------------------
  prueba(n){

      console.log(n);
  }

  insertar(dato,valor,pass,tree,ListaCircular){
   // console.log(tree);
      this.root = this._insert(this.root,dato,valor,pass,tree,ListaCircular);
  }

  mostrarUsuarios(){
    this._mostrarUsuarios(this.root);
  }

  _mostrarUsuarios(pivote){
    if (pivote !== null) {
      console.log(pivote.valor);
      if (pivote.izq !== null) {
       this._mostrarUsuarios(pivote.izq);
      } else {
         this._mostrarUsuarios(pivote.der);

      }
    }
    else{
      return null
    }
  }


  buscar(indice,pass) {
   
   // console.log("esta funcionando"+ this._buscar(this.root, indice,pass));
    return this._buscar(this.root, indice,pass);
  }

  eliminar(dato){
      this.root = this._eliminar(this.root,dato);
  }
  CambiarPass(indice,pass){
    this._CambiarPass(this.root,indice,pass);
  }
  _CambiarPass(pivote,indice,pass){
    if (pivote !== null) {
      if (pivote.valor=== indice) {
        pivote.pass=pass;
        return pivote.pass;
      }
      if (pivote.izq !== null) {
        return this._CambiarPass(pivote.izq, indice,pass);
      } else {
        return this._CambiarPass(pivote.der, indice,pass);
      }
    }
    else{
      return null
    }
  }



  printIO() {
      this._recorridoInOrden(this.root);
    }

  printPEO() {
    this._recorridoPreOrden(this.root);
  }

  printPOS() {
    this._recorridoPostOrden(this.root);
  }
  
  setRoot(valor,pass,tree){
    console.log(tree);
  return this._setRoot(this.root,valor,pass,tree);
  }

  _setRoot(pivote, indice,pas,tree) {
    if (pivote !== null) {
      if (pivote.valor=== indice && pivote.pass===pas) {
      pivote.tree=tree;
    //  console.log(pivote.tree.retornarRoot);
    console.log("imprimo aqui")
      console.log(pivote.tree);
        return pivote.tree;
      }
      if (pivote.izq !== null) {
        return this._setRoot(pivote.izq, indice,pas,tree);
      } else {
        return this._setRoot(pivote.der, indice,pas,tree);
      }
    }
    else{
      return null
    }
  }

  setLista(valor,pass,lista){
    console.log(lista);
  return this._setLista(this.root,valor,pass,lista);
  }

  _setLista(pivote, indice,pas,lista) {
    if (pivote !== null) {
      if (pivote.valor=== indice && pivote.pass===pas) {
      pivote.ListaCircular=lista;
    //  console.log(pivote.tree.retornarRoot);
    console.log("imprimo aqui")
      console.log(pivote.ListaCircular);
        return pivote.ListaCircular;
      }
      if (pivote.izq !== null) {
        return this._setLista(pivote.izq, indice,pas,lista);
      } else {
        return this._setLista(pivote.der, indice,pas,lista);
      }
    }
    else{
      return null
    }
  }


  returnRoot(valor, pass){
      return this._returnRoot(this.root,valor,pass);
  }

  _returnRoot(pivote, indice,pas) {
    if (pivote !== null) {
      if (pivote.valor=== indice && pivote.pass===pas) {
       // console.log("imprimo aqui el tree")
        //console.log(pivote.tree)
       // console.log(pivote.ListaCircular)
        return pivote.tree;
      }
      if (pivote.izq !== null) {
        return this._returnRoot(pivote.izq, indice,pas);
      } else {
        return this._returnRoot(pivote.der, indice,pas);
      }
    }
    else{
      return null
    }
  }

  returnLista(valor, pass){
    return this._returnLista(this.root,valor,pass);
}
_returnLista(pivote, indice,pas) {
  if (pivote !== null) {
    if (pivote.valor=== indice && pivote.pass===pas) {
      console.log("imprimo aqui el tree")
      //console.log(pivote.tree)
     // console.log(pivote.ListaCircular)
      return pivote.ListaCircular;
    }
    if (pivote.izq !== null) {
      return this._returnLista(pivote.izq, indice,pas);
    } else {
      return this._returnLista(pivote.der, indice,pas);
    }
  }
  else{
    return null
  }
}
  





  //---------------------------------------------------------------------

/*
  _returnTree(raiz,dato){

      if(raiz == null){
          return null;
      }else if(raiz.dato == dato){
          return raiz.tree;
      }else if(raiz.dato > dato){
          return this._returnTree(raiz.izq,dato);
      }else{
          return this._returnTree(raiz.der,dato);
      }
  }*/
  
  _MAX(val1, val2) {
    if (val1 > val2) {
      return val1;
    }

    return val2;
  }
  _getAltura(temp) {
    if (temp !== null) {
      return temp.altura;
    }
    return -1;
  }


  _rotacionIzquierda(pivote) {
    var aux;
    aux = pivote.izq;
    pivote.izq = aux.der;
    aux.der = pivote;
    pivote.altura =
      this._MAX(this._getAltura(pivote.izq), this._getAltura(pivote.der)) + 1;
    aux.altura = this._MAX(this._getAltura(aux.izq), pivote.altura) + 1;
    return aux;
  }

  _rotacionDerecha(pivote) {
    var aux;
    aux = pivote.der;
    pivote.der = aux.izq;
    aux.izq = pivote;
    pivote.altura =
      this._MAX(this._getAltura(pivote.der), this._getAltura(pivote.izq)) + 1;
    aux.altura = this._MAX(this._getAltura(aux.der), pivote.altura) + 1;
    return aux;
  }

  _rotacionDobleIzquierda(pivote) {
    pivote.izq = this._rotacionDerecha(pivote.izq);
    return this._rotacionIzquierda(pivote);
  }

  _rotacionDobleDerecha(pivote) {
    pivote.der = this._rotacionIzquierda(pivote.der);
    return this._rotacionDerecha(pivote);
  }

  _insert(root, dato, valor,pass,tree,ListaCircular) {
    if (root === null) {
     // console.log(root.ListaCircular);
      root = new Nodo(dato, valor,pass,tree,ListaCircular);
    } else {
      if (dato < root.dato) {
        root.izq = this._insert(root.izq, dato, valor,pass,tree,ListaCircular);
        if (this._getAltura(root.der) - this._getAltura(root.izq) === -2) {
          if (dato < root.izq.dato) {
            root = this._rotacionIzquierda(root);
          } else {
            root = this._rotacionDobleIzquierda(root);
          }
        }
      } else if (dato > root.dato)  {
        
          root.der = this._insert(root.der, dato, valor,pass,tree,ListaCircular);
          if (this._getAltura(root.der) - this._getAltura(root.izq) === 2) {
            if (dato > root.der.dato) {
              root = this._rotacionDerecha(root);
            } else {
              root = this._rotacionDobleDerecha(root);
            }
          }
        
      }else {
        alert("Elemento ya existe en el árbol");
    }
    }
    root.altura =
      this._MAX(this._getAltura(root.izq), this._getAltura(root.der)) + 1;
    return root;
  }
busquedaHash(carne){
 let s = tablaHash.busquedaUsuario(carne);
  return s;
}

return_tree_hash(carne){
  let s = tablaHash.returnTree(carne);
  return s;
}

//lista

Set_tree_hash(carne,tree){
  tablaHash.setTree(carne,tree);
}






  _buscar(pivote, indice,pas) {
    if (pivote !== null) {
      if (pivote.valor=== indice && pivote.pass===pas) {
        //console.log("busqueda exitosa---"+pivote.valor+"="+indice);
        console.log("pivote.tree");
        console.log(pivote.tree);
        return true;
      }
    //  console.log("busqueda aqui---"+pivote.valor+"="+indice);
      if (pivote.izq !== null) {
        this._buscar(pivote.izq, indice,pas);
      }
      if (pivote.der !== null) {
        this._buscar(pivote.der, indice,pas);
      }
    }
    return false;









/*if(pivote.izq !== null){
 this._buscar(pivote.izq, indice,pas);
}
if (pivote !== null) {
if (pivote.valor=== indice && pivote.pass===pas) {
  console.log("busqueda exitosa---"+pivote.valor+"="+indice);
  return true;
}
console.log("busqueda aqui---"+pivote.valor+"="+indice);
}
if (pivote.der !== null) {
 this._buscar(pivote.der, indice,pas);
}
return false;*/
  }




  inOrder(){

  }



  _recorridoInOrden(pivote) {
   // window.temporada=pivote;
    let row ="";
    if(pivote.izq !== null){
      row += this._recorridoInOrden(pivote.izq);
     // window.temporada=pivote;
    }//aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    row += `
    <tr>
    <th style="color:black">${pivote.dato}</th>  
    <td style="color:black">${pivote.valor}</td>
    <td style="color:black">${pivote.pass}</td>
    </tr>
    `;
   //console.log(pivote.valor);
   tablaHash.insertar(pivote.dato,pivote.valor,pivote.pass,pivote.tree);
   window.Lusers.push(new Estudiante(pivote.dato,pivote.valor,pivote.pass,pivote.tree));
 


   //tablaHash.mostrar();
    //console.log(pivote.tree);

    if (pivote.der !== null) {
      row += this._recorridoInOrden(pivote.der);
      //window.temporada=pivote;
   //   this._recorridoInOrden(pivote.izq);
     // this._recorridoInOrden(pivote.der);
    }
    return row;
  }

ejecutar(){
  tablaHash.genera_tabla();
}

ejecutarCerrar(){
  tablaHash.vaciar_tabla();
}

//_recorridoInOrden
  _recorridoPreOrden(pivote) {
    let row ="";
    row += `
    <tr>
    <th style="color:black">${pivote.dato}</th>  
    <td style="color:black">${pivote.valor}</td>
    <td style="color:black">${pivote.pass}</td>
    </tr>
    `;
    if (pivote !== null) {
   //   console.log(pivote.dato.toString(), pivote.valor);
    row+=  this._recorridoInOrden(pivote.izq);
     row+= this._recorridoInOrden(pivote.der);
    }

    return row;
  }

  _recorridoPostOrden(pivote) {
    let row = "";
    if (pivote !== null) {
      row += this._recorridoInOrden(pivote.izq);
      row += this._recorridoInOrden(pivote.der);
    //  console.log(pivote.dato.toString(), pivote.valor);
    }
    row += `
    <tr>
    <th style="color:black">${pivote.dato}</th>  
    <td style="color:black">${pivote.valor}</td>
    <td style="color:black">${pivote.pass}</td>
    </tr>
    `;
    return row;
  }

  graficar(raiz) {
    var cadena = "";
    cadena += "digraph G { \n";
    cadena += "rankdir=TB; \n";
    cadena +=
      "node [shape = record, color=black , style=filled, fillcolor=gray93];\n";
    cadena += this.__graficadora(raiz);
    cadena += "} \n";
    d3.select("#arbol-AVL").graphviz().width("100%").zoom(false).fit(true).renderDot(cadena);
  }

  __graficadora(root) {
    var cadena;
    cadena = "";

    if (root.der === null && root.izq === null) {
      cadena =
        "nodo" + root.dato.toString() + '[label ="carnet: ' + root.dato.toString() + "\\n nombre: " + root.valor + "\\n"+this._getAltura(root.izq)+ '"]; \n';
    } else {
      cadena = "nodo" + root.dato.toString() + '[label ="<C0>|carnet: ' + root.dato.toString() + "\\n nombre: " + root.valor+ "\\n" +  this._getAltura(root.der)+'|<C1> "]; \n';
    }

    if (root.izq !== null) {
      cadena = cadena + this.__graficadora(root.izq) + "nodo" + root.dato.toString() + ":C0->nodo" + root.izq.dato.toString()+"\n";
    }

    if (root.der !== null) {
      cadena = cadena + this.__graficadora(root.der) + "nodo" + root.dato.toString() + ":C1->nodo" + root.der.dato.toString()+  "\n";
    }
    return cadena;
  }
}