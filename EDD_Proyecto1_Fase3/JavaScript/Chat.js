class chat{
    constructor(index,TimeStap,emisor,reseptor,mensaje,hash,previusHash){
        this._index = index;
        this._TimeStap = TimeStap;
        this._emisor = emisor;
        this._reseptor = reseptor;
        this._mensaje = mensaje;
        this_previusHash = previusHash;
        this._hash = hash;


    }

    get index(){

        return this._index;
    }

    get TimeStap(){
            
            return this._TimeStap;
        }

    get emisor(){

            return this._emisor;
        }

    get reseptor(){
            
                return this._reseptor;
            }

    get mensaje(){
                
                    return this._mensaje;
                }

    get hash(){
                        
                            return this._hash;
                        }   


    get previusHash(){

        return this._previusHash;
    }

    set index(index){
        this._index = index;
    }

    set TimeStap(TimeStap){
        this._TimeStap = TimeStap;
    }

    set emisor(emisor){
        this._emisor = emisor;
    }

    set reseptor(reseptor){
        this._reseptor = reseptor;
    }

    set mensaje(mensaje){
        this._mensaje = mensaje;
    }

    set hash(hash){
        this._hash = hash;
    }

    set previusHash(previusHash){
        this._previusHash = previusHash;
    }


    toString(){
        return `
        index: ${this._index}
        TimeStap: ${this._TimeStap}
        emisor: ${this._emisor}
        reseptor: ${this._reseptor}
        mensaje: ${this._mensaje}
        hash: ${this._hash}
        previusHash: ${this._previusHash}
        `
    }
}

class Nodo {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
    }
}

export class listaSimple {
    constructor() {
        this.primero = null
        this.ultimo = null
    } 



    estavacia() {
        return this.primero === null
    }

    agregarAlinicio(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo(dato)
        } else {
            let auxiliar = new Nodo(dato)
            auxiliar.siguiente = this.primero
            this.primero = auxiliar
        }
    }

    agregarAlfinal(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo(dato)
        } else {
            let auxiliar = this.ultimo
            this.ultimo = new Nodo(dato)
            auxiliar.siguiente = this.ultimo
        }
    }


    eliminarAlinicio() {
        if (this.estavacia()) {
            console.log("Lista vacia")
        }
        else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            this.primero = this.primero.siguiente
        }
    }
    eliminarAlfinal() {
        if (this.estavacia()) {
            console.log("Lista vacia")
        }
        else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            let auxiliar = this.primero
            while (auxiliar.siguiente != this.ultimo) {
                auxiliar = auxiliar.siguiente
            }
            auxiliar.siguiente = null
        }
    }

    recorrerLista() {
        if (this.estavacia()) {
            console.log("La lista esta vacia")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            console.log(auxiliar.dato.toString())
            auxiliar = auxiliar.siguiente
        }
        console.log("\n")
    }


    tamanio() {
        var contador = 0
        if (this.estavacia()) {
            return 0
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            contador += 1
            auxiliar = auxiliar.siguiente
        }
        console.log("Número de elementos de la lista: " + contador)
        return contador
    }

    buscar(dato_) {
        if (this.estavacia()) {
            return null
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            if (auxiliar.dato.index === dato_) {
                return auxiliar.dato
            }
            auxiliar = auxiliar.siguiente
        }
        return null
    }
    ordenamientoBurbuja() {
        let auxiliar
        let actual = auxiliar = null
        if (!this.estavacia()) {
            actual = this.primero
            while (actual.siguiente) {
                auxiliar = actual.siguiente
                while (auxiliar) {
                    if (auxiliar.dato.index < actual.dato.index) {
                        let temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    }
                    auxiliar = auxiliar.siguiente
                }
                actual = actual.siguiente
            }
        } else {
            console.log("No se encontraron elementos")
        }
    }

//index,TimeStap,emisor,reseptor,mensaje,hash
    graficar() {
        var temporal, cadena, cont;
        temporal = this.primero;
        cont = 0;
        cadena = "";
        cadena += "digraph G { \n";
        cadena += "rankdir=LR \n";

        while (temporal !== null) {
            cadena += "Node" + cont + "[label=\"" + temporal.dato.index+ " \n" + temporal.dato.TimeStap + " \n" + temporal.dato.emisor+ " \n" + temporal.dato.reseptor+ " \n" + temporal.dato.mensaje+ " \n" + temporal.dato.hash +"\"];\n";

            if (temporal !== this.primero) {
                cadena += "Node" + (cont - 1) + " -> " + "Node" + cont + ";\n";
            }

            temporal = temporal.siguiente;
            cont += 1;
        }


        cadena += "}";
        console.log(cadena);
        d3.select("#lienzo").graphviz().width(1350).height(500).renderDot(cadena);
    }

 limpiarLista(){

        this.primero = null;
        this.ultimo = null;
    }
    

    graficarDot() {
        var temporal, cadena, cont;
        temporal = this.primero;
        cont = 0;
        cadena = "";
        cadena += "digraph G { \n";
        cadena += "rankdir=LR \n";

        while (temporal !== null) {
            cadena += "Node" + cont + "[label=\"" + temporal.dato.index+ " \n" + temporal.dato.TimeStap + " \n" + temporal.dato.emisor+ " \n" + temporal.dato.reseptor+ " \n" + temporal.dato.mensaje+ " \n" + temporal.dato.hash +"\"];\n";

            if (temporal !== this.primero) {
                cadena += "Node" + (cont - 1) + " -> " + "Node" + cont + ";\n";
            }

            temporal = temporal.siguiente;
            cont += 1;
        }

    }


}

