 
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

//------------------------index.js------------------------






let tree = window.treee
/*
console.log("treee eeeee")
console.log(tree)
console.log(window.treee)
*/



function crearCarpeta(e){
    const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const dia = now.getDate();
const mes = now.getMonth();
const year = now.getFullYear();




    e.preventDefault();
    let folderName =  $('#folderName').val();
    let path =  $('#path').val();
    window.treee.insert(folderName, path);
    alert("Todo bien!")
    console.log("datos")
    console.log(folderName)
    console.log(path)
    window.lis.agregarAlinicio(new NodoC("Accion: se creó carpeta",folderName,"Fecha: "+dia+"/"+mes+"/"+year,"Hora: "+hours+":"+minutes+":"+seconds))
    $('#carpetas').html(window.treee.getHTML(path))
}

function eliminarCarpeta(e){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const dia = now.getDate();
    const mes = now.getMonth();
    const year = now.getFullYear();


    e.preventDefault();
    let folderName =  $('#folderName').val();
    let path =  $('#path').val();
    let fatherPath = path == '/'? path : path.substring(0, path.lastIndexOf("/"));
    let fatherNode = window.treee.getFolder(fatherPath);
    fatherNode.children = fatherNode.children.filter( child => child.folderName != folderName);
    alert("Todo bien!")
    window.lis.agregarAlinicio(new NodoC("Accion: se eliminó carpeta",folderName,"Fecha: "+dia+"/"+mes+"/"+year,"Hora: "+hours+":"+minutes+":"+seconds))
    $('#carpetas').html(window.treee.getHTML(path))
}
 
function entrarCarpeta(folderName){
    let path = $('#path').val();
    let curretPath = path == '/'? path + folderName : path + "/"+ folderName;
    console.log(curretPath)
    $('#path').val(curretPath);
    $('#carpetas').html(window.treee.getHTML(curretPath))
}

function retornarInicio(){
    $('#path').val("/");
    $('#carpetas').html(window.treee.getHTML("/"))
}

function showTreeGraph(){
    let url = 'https://quickchart.io/graphviz?graph=';
    let body = `digraph G { ${window.treee.graph()} }`
    $("#graph").attr("src", url + body);
}

function showMatrixGraph(){
   // let path = $('#path').val();
    let url = 'https://quickchart.io/graphviz?graph=';
   // console.log(window.treee.matrixGrpah(path))
 body = `digraph G { ${window.lis.graficarDot()} }`
    $("#graphh").attr("src", url + body);
}


const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

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
