 class NodoC{
    constructor(accion,direccion,fecha,hora){
        this._accion = accion;
        this._direccion = direccion;
        this._fecha = fecha;
        this._hora = hora;
    }

    get accion(){
        return this._accion;
    }

    get direccion(){
        return this._direccion;
    }

    get fecha(){
        return this._fecha;
    }

    get hora(){
        return this._hora;
    }

    set accion(accion){
        this._accion = accion;
    }

    set direccion(direccion){
        this._direccion = direccion;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }

    set hora(hora){
        this._hora = hora;
    }

    toString(){
        return `
        Accion: ${this._accion}
        Direccion: ${this._direccion}
        Fecha: ${this._fecha}
        Hora: ${this._hora}
        `
    }
}

class Nodo {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
    }
}

export class ListaCircular {
    constructor() {
        this.primero = null
        this.ultimo = null
    }


    
    estaVacia() {
        return this.primero === null
    }

    agregarAlinicio(dato) {
        if (this.estaVacia()) {
            this.primero = this.ultimo = new Nodo(dato)
            this.ultimo.siguiente = this.primero
        }
        else {
            let auxiliar = new Nodo(dato)
            auxiliar.siguiente = this.primero
            this.primero = auxiliar
            this.ultimo.siguiente = this.primero
        }
    }

    agregarAlfinal(dato) {
        if (this.estaVacia()) {
            this.primero = this.ultimo = new Nodo(dato)
            this.ultimo.siguiente = this.primero
        }
        else {
            let auxiliar = this.ultimo
            this.ultimo = auxiliar.siguiente = new Nodo(dato)
            this.ultimo.siguiente = this.primero
        }
    }

    eliminarAlinicio() {
        if (this.estaVacia()) {
            console.log("No se encontraron datos en la lista")
        }
        else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            this.primero = this.primero.siguiente
            this.ultimo.siguiente = this.primero
        }
    }

    eliminarAlfinal() {
        if (this.estaVacia()) {
            console.log("No se encontraron datos")
        }
        else if (this.primero = this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            let auxiliar = this.primero
            while (auxiliar.siguiente != this.ultimo) {
                auxiliar = auxiliar.siguiente
            }
            auxiliar.siguiente = this.primero
            this.ultimo = auxiliar
        }
    }

    recorrerLista() {
        if (this.estaVacia()) {
            console.log("No se encontraron datos")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
          //  console.log(auxiliar.dato.toString())
            auxiliar = auxiliar.siguiente
            if (auxiliar === this.primero) {
                break
            }
        }
        console.log("\n")
    }
    tamanio() {
        let contador = 0
        if (this.estaVacia()) {
            return 0
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            contador += 1
            auxiliar = auxiliar.siguiente
            if (auxiliar === this.primero) {
                console.log(contador)
            }
        }
    }

    ordenamientoBurbuja() {
        let auxiliar = this.primero
        let auxiliar2 = this.primero
        let temp = null
        while (auxiliar != null) {
            while (auxiliar2 != null) {
                if (auxiliar.dato.hora > auxiliar2.dato.hora) {
                    temp = auxiliar.dato
                    auxiliar.dato = auxiliar2.dato
                    auxiliar2.dato = temp
                }
                auxiliar2 = auxiliar2.siguiente
            }
            auxiliar = auxiliar.siguiente
        }
    }

    graficarDot() {
        const MAXVALUE = 1;
        let aux = this.primero,
            cont = 0,
            cont_aux = 0,
            cadena = "";
     //   cadena += "digraph G { \n";
        cadena += "rankdir=LR \n";

        while (aux) {
            cadena += "Node" + String(cont) + '[label="' + aux.dato.accion+"\\n" +aux.dato.direccion+"\\n" +aux.dato.fecha+"\\n"+aux.dato.hora +'"];\n';
            cont += 1;
            aux = aux.siguiente;
            if (aux === this.primero) {
                cont_aux += 1;
                if (cont_aux === MAXVALUE) break;
            }
        }
        cont = cont_aux = 0
        while (aux) {
            cadena += "Node" + String(cont) + " -> " + "Node" + String(cont + 1) + ";\n";
            cont += 1;
            aux = aux.siguiente;
            if (aux === this.ultimo) {
                cont_aux += 1;
                if (cont_aux === MAXVALUE) break;
            }
        }
        cadena += "Node" + String(cont) + " -> " + "Node" + String(0) + ";\n"
      //  cadena += "}";
        console.log(cadena);
        //d3.select("#lienzo").graphviz().width(1350).height(500).renderDot(cadena);
        return cadena;

    }
}
