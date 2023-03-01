package Lista1

import (
	"fmt"
	"migo/lista2"
	"os"
	"os/exec"
	//	"migo/main"
)

type Nodo struct {
	anterior  *Nodo
	Siguiente *Nodo
	Nombre    string
	Apellido  string
	Carnet    string
	Pasword   string
}
type Lista struct {
	Primero *Nodo
	ultimo  *Nodo
	//otro    *lista2
	tamano int
}

func (l *Lista) vacia() bool {
	if l.tamano == 0 {
		return true
	}
	return false
}

func NewLista() *Lista {
	return &Lista{nil, nil, 0}
}

func (m *Lista) insertar(Nombre string, Apellido string, Carnet string, Pasword string) {
	nuevo := &Nodo{nil, nil, Nombre, Apellido, Carnet, Pasword}

	if m.Primero == nil {

		m.Primero = nuevo
		m.ultimo = nuevo
	} else {
		m.ultimo.Siguiente = nuevo
		nuevo.anterior = m.ultimo
		m.ultimo = nuevo
	}
	m.tamano++
}

func (l *Lista) Retornar() *Nodo {

	return l.Primero

}

func (l *Lista) InsertarAlInicio(Nombre string, Apellido string, Carnet string, Pasword string) {
	nuevo := &Nodo{nil, nil, Nombre, Apellido, Carnet, Pasword}
	if l.Primero == nil {
		l.Primero = nuevo
		l.ultimo = nuevo
	} else {
		nuevo.Siguiente = l.Primero
		l.Primero.anterior = nuevo
		l.Primero = nuevo
	}
	l.tamano++
}

func (l *Lista) RetornarPrimero() *Nodo {
	return l.Primero
}

func (l *Lista) OPCION() {
	l2 := lista2.NewLista()
	if l.Primero == nil {
		fmt.Println("Lista vacia ,,,,,,,,,,")
	} else {
		pr := 1

		aux := l.Primero
		for aux != nil {
			fmt.Println("-------------------pendiente :", pr, " -------------------")
			fmt.Println("-------------Estudiante :", aux.Nombre, " --------------")
			fmt.Println("1. Aceptar al Estudiante ")
			fmt.Println("2. Rechazar al Estudiante ")
			fmt.Println("3. Salir ")
			fmt.Println("Ingrese una opcion: ")
			var opcion int
			fmt.Scanln(&opcion)
			switch opcion {
			case 1:
				if aux.Siguiente == nil {
					l2.InsertarAlFinal(aux.Nombre, aux.Apellido, aux.Carnet, aux.Pasword)
					l.Eliminar(aux.Carnet)
					break
				}
				l2.InsertarAlFinal(aux.Nombre, aux.Apellido, aux.Carnet, aux.Pasword)
				l.Eliminar(aux.Carnet)

				//		l2.InsertarAlFinal(aux.Nombre, aux.Apellido, aux.Carnet, aux.Pasword)
				//		l.eliminar(aux.Carnet) como crear un circuito que tenga de salida 4 bits que tenga 8 operaciones logicas
			case 2:
				l.Eliminar(aux.Carnet)
				fmt.Println("Estudiante rechazado")
			case 3:
				break
			default:
				fmt.Println("Opcion no valida")
			}

			aux = aux.Siguiente
			pr++

		}

	}
	l2.Imprimir()
}

func (l *Lista) InsertarAlFinal(Nombre string, Apellido string, Carnet string, Pasword string) {
	nuevo := &Nodo{nil, nil, Nombre, Apellido, Carnet, Pasword}
	if l.Primero == nil {
		l.Primero = nuevo
		l.ultimo = nuevo
	} else {
		l.ultimo.Siguiente = nuevo
		nuevo.anterior = l.ultimo
		l.ultimo = nuevo
	}
	l.tamano++
}

func (l *Lista) Imprimir() {
	if l.Primero == nil {
		fmt.Println("Lista vacia.........")
	} else {
		pr := 1
		aux := l.Primero
		for aux != nil {
			fmt.Println("-------------------Estudiante :", pr, " -------------------")
			fmt.Println("Nombre: ", aux.Nombre)
			fmt.Println(", Apellido: ", aux.Apellido)
			fmt.Println(", Carnet: ", aux.Carnet)
			fmt.Println(", Pasword: ", aux.Pasword)
			aux = aux.Siguiente
			pr++
		}
	}
}
func (l *Lista) buscar(Carnet string) *Nodo {
	aux := l.Primero
	for aux != nil {
		if aux.Carnet == Carnet {
			return aux
		}
		aux = aux.Siguiente
	}
	return nil
}

func (l *Lista) Eliminar(Carnet string) {
	aux := l.Primero
	for aux != nil {
		if aux.Carnet == Carnet {
			if aux == l.Primero {
				l.Primero = aux.Siguiente
				aux.Siguiente.anterior = nil
			} else if aux == l.ultimo {
				l.ultimo = aux.anterior
				aux.anterior.Siguiente = nil
			} else {
				aux.anterior.Siguiente = aux.Siguiente
				aux.Siguiente.anterior = aux.anterior
			}
			l.tamano--
			break
		}
		aux = aux.Siguiente
	}
}

func (l *Lista) modificar(Carnet, Nombre, Apellido, Pasword string) {
	aux := l.Primero
	for aux != nil {
		if aux.Carnet == Carnet {
			aux.Nombre = Nombre
			aux.Apellido = Apellido
			aux.Pasword = Pasword
		}
		aux = aux.Siguiente
	}
}
func (l *Lista) Graficar() {
	aux := l.Primero
	var cadena string
	cadena = "digraph G {\n"
	cadena += "rankdir=LR;\n"
	cadena += "node [shape=record];\n"
	cadena += "node0 [label=\""
	for aux != nil {
		cadena += "<" + aux.Carnet + ">" + aux.Carnet + "|"
		aux = aux.Siguiente
	}
	cadena += "\"];\n"
	aux = l.Primero
	for aux != nil {
		if aux.Siguiente != nil {
			cadena += "node" + aux.Carnet + " -> node" + aux.Siguiente.Carnet + ";\n"
		}
		if aux.anterior != nil {
			cadena += "node" + aux.Carnet + " -> node" + aux.anterior.Carnet + ";\n"
		}
		aux = aux.Siguiente
	}
	cadena += "}"
	fmt.Println(cadena)
}

//	func (l *Lista) Graf() {
//		if l.Primero == nil {
//			fmt.Println("Lista vacia")
//		} else {
//			archivo, err := os.Create("lista.png")
//			if err != nil {
//				fmt.Println(err)
//			}
//			defer archivo.Close()
//			cmd := exec.Command("dot", "-Tpng", "lista.dot", "-o", "lista.png")
//			cmd.Run()
//		}
//	}
func (l *Lista) Graf() {
	aux := l.Primero
	cadena := "digraph G {\n"
	for aux != nil {
		cadena += "node" + aux.Carnet + "[label=\"" + aux.Carnet + "\n" + aux.Nombre + "\n" + aux.Apellido + "\n" + aux.Pasword + "\"];\n"
		if aux.Siguiente != nil {
			cadena += "node" + aux.Carnet + "->node" + aux.Siguiente.Carnet + ";\n"
		}
		aux = aux.Siguiente
	}
	cadena += "}"
	file := "lista.dot"
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
	cmd := exec.Command("dot", "-Tpng", "lista.dot", "-o", "lista.png")
	cmd.Run()

}

func (l *Lista) Tamano() int {
	return l.tamano
}
