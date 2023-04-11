
## EDD GoDrive


# Resumen
el presente reporte explicara la aplicacion GoDrive el cual es un manejar de archivos para la Universidad de San Carlos de Guatemala de la facultad de ingenieria, este lleva el control de usuarios, este sera un sistema para manejar los archivos importantes que se deseen 

## Desarrollo del tema

El presente programa fue desarollado con js y html, la interfaz fue creada a partir del archivo index, este esta compuesto de la interfaz de login, admin y usuario.

## Interfaz de admin
la interfaz de admin está compuesta por un boton donde se mostran los estudiantes cargados al sistema, esta se creo atravez de los metodos con el nodo Estudiante, donde se iran implementando los distintos datos a la tabla por medio de la rama a la que pertenezcan.

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
    console.log(pivote.valor);
    console.log(pivote.tree);

    if (pivote.der !== null) {
      row += this._recorridoInOrden(pivote.der);
      //window.temporada=pivote;
   //   this._recorridoInOrden(pivote.izq);
     // this._recorridoInOrden(pivote.der);
    }
    return row;
  }
  
  
El boton graficar se dara atravez de el metodo graficar que pertenece a el nodo Estudiante donde se recorrera el arbol de todos los estudiantes y se iran implementando sus respectivos datos, este ira evaluando a que rama pertenece cada estudiante y asi determinar su altura.
  
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
## Interfaz de Usuario

aqui se implementara la interfaz por medio de el html, principalmente se contara con el boton de crear carpetas, este tomara el path de el archivo y lo ingresara a la lista Children de el estudiante, de esta forma se guardaran todas las carpetas y archivos creados por el estudiante, se utilizaron las librerias Date, Promise, FileReader y form, con esto se logra volver  todos los archivos a texto plano de manera que puedan ser cargados al sistema y permita poder descargar o almacenar en el.


const subirArchivo =  async (e) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const dia = now.getDate();
    const mes = now.getMonth();
    const year = now.getFullYear();
    e.preventDefault();
    const formData = new FormData(e.target);
    const form = Object.fromEntries(formData);
//aquiiii
if(window.treee.buscarArchivo(form.fileName)){
    form.fileName=form.fileName+"(copia)"
}
    // console.log(form.file.type);
    let path = $('#path').val();
    if(form.file.type === 'text/plain'){
        // ARCHIVO DE TEXTO
        let fr = new FileReader();
        fr.readAsText(form.file);
        fr.onload = () => { 
            // CARGAR ARCHIVO A LA MATRIZ
            window.treee.getFolder(path).files.push({
                name: form.fileName, 
                content: fr.result, 
                type: form.file.type
            })
            $('#carpetas').html(window.treee.getHTML(path));
        };
        window.lis.agregarAlinicio(new NodoC("Accion: se creo archivo",form.fileName,"Fecha: "+dia+"/"+mes+"/"+year,"Hora: "+hours+":"+minutes+":"+seconds))
    }else{
        // IMÁGENES O PDF 
        let parseBase64 = await toBase64(form.file);
        window.treee.getFolder(path).files.push({
            name: form.fileName, 
            content: parseBase64, 
            type: form.file.type
        })
        $('#carpetas').html(window.treee.getHTML(path));
        // console.log(parseBase64)
        // $("#imagenSubida").attr("src", imgBase64); 
        // console.log(await toBase64(form.file));
        window.lis.agregarAlinicio(new NodoC("Accion: se creo archivo",form.fileName,"Fecha: "+dia+"/"+mes+"/"+year,"Hora: "+hours+":"+minutes+":"+seconds))
    }
    
    alert('Archivo Subido!')

}

la grafica de las acciones que va realizando el usuario se almacenan en una lista circular, esta esta compuesta de sus respectivos nodos, esta al presionar el boton de graficar, se ejecutara el metodo graficar de dicha lista, con esto se podra vizualizar en la interfaz grafica del usuario sin ningun problema

 class NodoC{
    constructor(accion,direccion,fecha,hora){
        this._accion = accion;
        this._direccion = direccion;
        this._fecha = fecha;
        this._hora = hora;
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
    
  Cabe aclarar que todos los datos y acciones que posee y realiza el usuario o el admin quedaran guardados en su localStoreg del respectivo programa.    

