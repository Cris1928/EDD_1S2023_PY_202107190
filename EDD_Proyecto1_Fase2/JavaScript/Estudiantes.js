export class Estudiante{
    constructor(carnet, nombre, password,carpeta){
        this._carnet = carnet
        this._nombre = nombre
        this._password = password
        this._carpeta = carpeta
    }
    get carnet(){
        return this._carnet
    }
    get nombre(){
        return this._nombre
    }
    get password(){
        return this._password
    }
    get carpeta(){
        return this._carpeta
    }
    set carnet(carnet){
        this._carnet = carnet
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    set password(password){
        this._password = password
    }
    set carpeta(carpeta){
        this._carpeta = carpeta
    }

    toString(){
        return `
        Carnet: ${this._carnet}
        Nombre: ${this._nombre}
        Password: ${this._password}
        Carpeta: ${this._carpeta}
        `
    }

    returnCarnet(){
        return this._carnet
    }

}

class Nodo {
    constructor(dato,valor,pass) {
        this.dato = dato;
        this.valor = valor;
        this.pass = pass;
        this.izq = null;
        this.der = null;
        this.altura = 0;
    }
}

export class AVL{
  constructor(){
      this.root = null;
  }

  insertar(dato,valor,pass){
      this.root = this._insert(this.root,dato,valor,pass);
  }
  buscar(indice,pass) {
    return this._buscar(this.root, indice,pass);
  }

  eliminar(dato){
      this.root = this._eliminar(this.root,dato);
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

  _insert(root, dato, valor,pass) {
    if (root === null) {
      root = new Nodo(dato, valor,pass);
    } else {
      if (dato < root.dato) {
        root.izq = this._insert(root.izq, dato, valor,pass);
        if (this._getAltura(root.der) - this._getAltura(root.izq) === -2) {
          if (dato < root.izq.dato) {
            root = this._rotacionIzquierda(root);
          } else {
            root = this._rotacionDobleIzquierda(root);
          }
        }
      } else if (dato > root.dato)  {
        
          root.der = this._insert(root.der, dato, valor,pass);
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

  _buscar(pivote, indice,pas) {
    if (pivote !== null) {
      if (pivote.valor=== indice && pivote.pass===pas) {
        return true;
      }
      if (pivote.izq !== null) {
        return this._buscar(pivote.izq, indice,pas);
      } else {
        return this._buscar(pivote.der, indice,pas);
      }
    }
    return false;
  }


  inOrder(){

  }



  _recorridoInOrden(pivote) {
    let row ="";
    if(pivote.izq !== null){
      row += this._recorridoInOrden(pivote.izq);
    }//aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    row += `
    <tr>
    <th style="color:black">${pivote.dato}</th>  
    <td style="color:black">${pivote.valor}</td>
    <td style="color:black">${pivote.pass}</td>
    </tr>
    `;

    if (pivote.der !== null) {
      row += this._recorridoInOrden(pivote.der);
   //   this._recorridoInOrden(pivote.izq);
     // this._recorridoInOrden(pivote.der);
    }
    return row;
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
        "nodo" + root.dato.toString() + '[label ="carnet: ' + root.dato.toString() + "\\n nombre: " + root.valor + '"]; \n';
    } else {
      cadena = "nodo" + root.dato.toString() + '[label ="<C0>|carnet: ' + root.dato.toString() + "\\n nombre: " + root.valor + '|<C1> "]; \n';
    }

    if (root.izq !== null) {
      cadena = cadena + this.__graficadora(root.izq) + "nodo" + root.dato.toString() + ":C0->nodo" + root.izq.dato.toString()+ "\n";
    }

    if (root.der !== null) {
      cadena = cadena + this.__graficadora(root.der) + "nodo" + root.dato.toString() + ":C1->nodo" + root.der.dato.toString() + "\n";
    }
    return cadena;
  }
}