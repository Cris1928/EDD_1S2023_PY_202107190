package Pila_admin

import (
	"fmt"
	"os"
	"os/exec"
)

type NodoPA struct {
	Anterior  *NodoPA
	Siguiente *NodoPA
	Estado    string
	Carnet    string
	Nombre    string
	Apellido  string
	Fecha     string
	Hora      string
}
type ListaPA struct {
	Primero *NodoPA
	ultimo  *NodoPA
	Tamano  int
}

func NewLista() *ListaPA {
	return &ListaPA{nil, nil, 0}
}
func (l *ListaPA) vacia() bool {
	if l.Tamano == 0 {
		return true
	}
	return false
}
func (l *ListaPA) InsertarAlFinal(Estado string, Carnet string, Nombre string, Apellido string, Fecha string, Hora string) {
	nuevo := &NodoPA{nil, nil, Estado, Carnet, Nombre, Apellido, Fecha, Hora}
	if l.Primero == nil {
		l.Primero = nuevo
		l.ultimo = nuevo
	} else {
		l.ultimo.Siguiente = nuevo
		nuevo.Anterior = l.ultimo
		l.ultimo = nuevo
	}
	l.Tamano++
}

func (l *ListaPA) Imprimir() {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		aux := l.Primero
		for aux != nil {
			fmt.Println(aux.Nombre, aux.Fecha, aux.Hora)
			aux = aux.Siguiente
		}
	}
}

func (l *ListaPA) RetornarPrimero() *NodoPA {
	return l.Primero
}

func (l *ListaPA) Graficar() {
	aux := l.Primero
	cadena := "digraph G {\n"
	for aux != nil {
		cadena += "node" + aux.Carnet + "[label=\"" + aux.Estado + "\n" + aux.Nombre + " " + aux.Apellido + "\n" + aux.Fecha + "\n" + aux.Hora + "\"];\n"
		if aux.Siguiente != nil {
			cadena += "node" + aux.Carnet + "->node" + aux.Siguiente.Carnet + ";\n"
		}
		aux = aux.Siguiente
	}
	cadena += "}"
	file := "listaP.dot"
	f, err := os.Create(file)
	if err != nil {
		fmt.Println(err)
	}
	defer f.Close()
	_, err = f.WriteString(cadena)
	if err != nil {
		fmt.Println(err)
	}
	f.Sync()
	cmd := exec.Command("dot", "-Tpng", "listaP.dot", "-o", "listaP.png")
	cmd.Run()

}
