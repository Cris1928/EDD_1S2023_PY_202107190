package Pila

import (
	"fmt"
)

type NodoP struct {
	Anterior  *NodoP
	Siguiente *NodoP
	Fecha     string
	Hora      string
}
type ListaP struct {
	Primero *NodoP
	ultimo  *NodoP
	Tamano  int
}

func NewLista() *ListaP {
	return &ListaP{nil, nil, 0}
}
func (l *ListaP) vacia() bool {
	if l.Tamano == 0 {
		return true
	}
	return false
}
func (l *ListaP) InsertarAlInicio(Fecha string, Hora string) {
	nuevo := &NodoP{nil, nil, Fecha, Hora}
	if l.Primero == nil {
		l.Primero = nuevo
		l.ultimo = nuevo
	} else {
		nuevo.Siguiente = l.Primero
		l.Primero.Anterior = nuevo
		l.Primero = nuevo
	}
	l.Tamano++
}
func (l *ListaP) InsertarAlFinal(Fecha string, Hora string) {
	nuevo := &NodoP{nil, nil, Fecha, Hora}
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
func (l *ListaP) Imprimir() {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		aux := l.Primero
		for aux != nil {
			fmt.Println(aux.Fecha, aux.Hora)
			aux = aux.Siguiente
		}
	}
}
func (l *ListaP) EliminarAlInicio() {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		l.Primero = l.Primero.Siguiente
		l.Primero.Anterior = nil
		l.Tamano--
	}
}
func (l *ListaP) EliminarAlFinal() {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		l.ultimo = l.ultimo.Anterior
		l.ultimo.Siguiente = nil
		l.Tamano--
	}
}
func (l *ListaP) EliminarPorPosicion(pos int) {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		if pos == 0 {
			l.EliminarAlInicio()
		} else if pos == l.Tamano-1 {
			l.EliminarAlFinal()
		} else if pos >= l.Tamano {
			fmt.Println("Posicion no valida")
		} else {
			aux := l.Primero
			for i := 0; i < pos; i++ {
				aux = aux.Siguiente
			}
			aux.Anterior.Siguiente = aux.Siguiente
			aux.Siguiente.Anterior = aux.Anterior
			l.Tamano--
		}
	}
}
func (l *ListaP) BuscarPorPosicion(pos int) {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		if pos == 0 {
			fmt.Println(l.Primero.Fecha, l.Primero.Hora)
		} else if pos == l.Tamano-1 {
			fmt.Println(l.ultimo.Fecha, l.ultimo.Hora)
		} else if pos >= l.Tamano {
			fmt.Println("Posicion no valida")
		} else {
			aux := l.Primero
			for i := 0; i < pos; i++ {
				aux = aux.Siguiente
			}
			fmt.Println(aux.Fecha, aux.Hora)
		}
	}
}
func (l *ListaP) BuscarPorFecha(Fecha string) {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		aux := l.Primero
		for aux != nil {
			if aux.Fecha == Fecha {
				fmt.Println(aux.Fecha, aux.Hora)
			}
			aux = aux.Siguiente
		}
	}
}
func (l *ListaP) BuscarPorHora(Hora string) {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		aux := l.Primero
		for aux != nil {
			if aux.Hora == Hora {
				fmt.Println(aux.Fecha, aux.Hora)
			}
			aux = aux.Siguiente
		}
	}
}
func (l *ListaP) BuscarPorFechaYHora(Fecha string, Hora string) {
	if l.vacia() {
		fmt.Println("La lista esta vacia")
	} else {
		aux := l.Primero
		for aux != nil {
			if aux.Fecha == Fecha && aux.Hora == Hora {
				fmt.Println(aux.Fecha, aux.Hora)
			}
			aux = aux.Siguiente
		}
	}
}
