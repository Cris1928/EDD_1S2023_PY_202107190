package lista2

import (
	"fmt"
	"migo/Pila"
	"os"
	"os/exec"
	"strconv"
)

type nodo struct {
	anterior  *nodo
	siguiente *nodo
	pil       *Pila.ListaP
	//otraLista *pila
	nombre   string
	apellido string
	carnet   string
	pasword  string
}
type lista struct {
	primero *nodo
	ultimo  *nodo

	tamano int
}

//type pila struct {
//	primero *nodo
//	ultimo  *nodo
//	tamano  int
//}

func (l *lista) Vacia() bool {
	if l.tamano == 0 {
		return true
	}
	return false
}

func NewLista() *lista {
	return &lista{nil, nil, 0}
}
func (l *lista) InsertarAlInicio(nombre string, apellido string, carnet string, pasword string) {
	nuevo := &nodo{nil, nil, Pila.NewLista(), nombre, apellido, carnet, pasword}
	if l.primero == nil {
		l.primero = nuevo
		l.ultimo = nuevo
	} else {
		nuevo.siguiente = l.primero
		l.primero.anterior = nuevo
		l.primero = nuevo
	}
	l.tamano++
}
func (l *lista) InsertarAlFinal(nombre string, apellido string, carnet string, pasword string) {
	nuevo := &nodo{nil, nil, Pila.NewLista(), nombre, apellido, carnet, pasword}
	if l.primero == nil {
		l.primero = nuevo
		l.ultimo = nuevo
	} else {
		l.ultimo.siguiente = nuevo
		nuevo.anterior = l.ultimo
		l.ultimo = nuevo
	}
	l.tamano++
}

//func (l *lista) InsertarAlInicio(nombre string, apellido string, carnet string, pasword string) {
//	nuevo := &nodo{nil, nil, nombre, apellido, carnet, pasword}
//	if l.primero == nil {
//		l.primero = nuevo
//		l.ultimo = nuevo
//	} else {
//		nuevo.siguiente = l.primero
//		l.primero.anterior = nuevo
//		l.primero = nuevo
//	}
//	l.tamano++
//}

//func (l *lista) InsertarAlFinal(nombre string, apellido string, carnet string, pasword string) {
//	nuevo := &nodo{nil, nil, nombre, apellido, carnet, pasword}
//	if l.primero == nil {
//		l.primero = nuevo
//		l.ultimo = nuevo
//	} else {
//		l.ultimo.siguiente = nuevo
//		nuevo.anterior = l.ultimo
//		l.ultimo = nuevo
//	}
//	l.tamano++
//}

//	func (l *lista) Imprimir() {
//		if l.primero == nil {
//			fmt.Println("Lista vacia")
//		} else {
//			pr := 1
//			aux := l.primero
//			for aux != nil {
//				fmt.Println("-------------------Estudiante :", pr, " -------------------")
//				fmt.Println("Nombre: ", aux.nombre)
//				fmt.Println(", Apellido: ", aux.apellido)
//				fmt.Println(", Carnet: ", aux.carnet)
//				fmt.Println(", Pasword: ", aux.pasword)
//				aux = aux.siguiente
//				pr++
//			}
//		}
//	}
func (l *lista) Imprimir() {
	if l.primero == nil {
		fmt.Println("Lista vacia ...")
	} else {
		pr := 1
		aux := l.primero
		for aux != nil {
			fmt.Println("-------------------Estudiante :", pr, " -------------------")
			fmt.Println("Nombre: ", aux.nombre)
			fmt.Println(", Apellido: ", aux.apellido)
			fmt.Println(", Carnet: ", aux.carnet)
			fmt.Println(", Pasword: ", aux.pasword)
			aux = aux.siguiente
			pr++
		}

	}
	l.Graficar()
}

func (l *lista) CrearJSON() {
	if l.primero == nil {
		fmt.Println("Lista vacia")
	} else {
		archivo, err := os.Create("Estudiantes.json")
		if err != nil {
			fmt.Println("Error al crear el archivo")
		}
		defer archivo.Close()
		archivo.WriteString("[\n")
		aux := l.primero
		for aux != nil {
			archivo.WriteString("{\n")
			archivo.WriteString("\"Nombre\": \"" + aux.nombre + "\",\n")
			archivo.WriteString("\"Apellido\": \"" + aux.apellido + "\",\n")
			archivo.WriteString("\"Carnet\": \"" + aux.carnet + "\",\n")
			archivo.WriteString("\"Pasword\": \"" + aux.pasword + "\"\n")
			archivo.WriteString("},\n")
			aux = aux.siguiente
		}
		archivo.WriteString("]\n")
	}
}

func (l *lista) BuscarPorCarnet(carnet string, pasword string, fecha string, hora string) bool {
	if l.primero == nil {
		fmt.Println("Lista vacia")
		return false
	} else {
		aux := l.primero
		for aux != nil {
			if aux.carnet == carnet && aux.pasword == pasword {
				aux.pil.InsertarAlFinal(fecha, hora)
				//			fmt.Print("Encontrado")
				return true
			}
			aux = aux.siguiente
		}
	}
	//	fmt.Print("No encontrado")
	return false
}

func (l *lista) AgregarFechaYHora(fecha string, hora string) {
	if l.primero == nil {
		fmt.Println("Lista vacia")
	} else {
		aux := l.primero
		for aux != nil {
			aux.pil.InsertarAlFinal(fecha, hora)
		}
	}
}

func (l *lista) OrdenarPorCarne() {
	if l.primero == nil {
		fmt.Println("Lista vacia")
	} else {
		aux := l.primero
		for aux != nil {
			aux2 := aux.siguiente
			for aux2 != nil {
				if aux.carnet > aux2.carnet {
					aux.carnet, aux2.carnet = aux2.carnet, aux.carnet
					aux.nombre, aux2.nombre = aux2.nombre, aux.nombre
					aux.apellido, aux2.apellido = aux2.apellido, aux.apellido
					aux.pasword, aux2.pasword = aux2.pasword, aux.pasword
				}
				aux2 = aux2.siguiente
			}
			aux = aux.siguiente
		}
	}
}

func (l *lista) buscar(carnet string) *nodo {
	aux := l.primero
	for aux != nil {
		if aux.carnet == carnet {
			return aux
		}
		aux = aux.siguiente
	}
	return nil
}
func (l *lista) eliminar(carnet string) {
	aux := l.primero
	for aux != nil {
		if aux.carnet == carnet {
			if aux.anterior == nil {
				l.primero = aux.siguiente
				aux.siguiente.anterior = nil
				l.tamano--
			} else if aux.siguiente == nil {
				l.ultimo = aux.anterior
				aux.anterior.siguiente = nil
				l.tamano--
			} else {
				aux.anterior.siguiente = aux.siguiente
				aux.siguiente.anterior = aux.anterior
				l.tamano--
			}
		}
		aux = aux.siguiente
	}
}
func (l *lista) modificar(carnet, nombre, apellido, pasword string) {
	aux := l.primero
	for aux != nil {
		if aux.carnet == carnet {
			aux.nombre = nombre
			aux.apellido = apellido
			aux.pasword = pasword
		}
		aux = aux.siguiente
	}
}

func (l *lista) Graficar() {
	if l.primero == nil {
		fmt.Println("Lista vacia")
	} else {
		archivo, err := os.Create("lista.dot")
		if err != nil {
			fmt.Println(err)
		}
		defer archivo.Close()
		archivo.WriteString("digraph G{\n")
		archivo.WriteString("rankdir=LR;\n")
		archivo.WriteString("node[shape=record];\n")
		archivo.WriteString("subgraph cluster_0 {\n")
		archivo.WriteString("label = \"Lista Doblemente Enlazada\";\n")
		archivo.WriteString("color=blue;\n")
		aux := l.primero
		for aux != nil {
			archivo.WriteString("node" + aux.carnet + "[label = \"<f0>|" + aux.nombre + "|" + aux.apellido + "|" + aux.carnet + "|" + aux.pasword + "|<f1>\"];\n")
			aux = aux.siguiente
		}
		aux = l.primero
		for aux != nil {
			if aux.siguiente != nil {
				archivo.WriteString("node" + aux.carnet + ":f1->node" + aux.siguiente.carnet + ":f0;\n")
			}
			if aux.anterior != nil {
				archivo.WriteString("node" + aux.carnet + ":f0->node" + aux.anterior.carnet + ":f1;\n")
			}
			aux = aux.siguiente
		}
		archivo.WriteString("}\n")
		archivo.WriteString("}")
	}
}

func (l *lista) Graff() {
	aux := l.primero
	n := 0
	cadena := "digraph G {\n"
	for aux != nil {
		prueba := 0
		cadena += "node" + aux.carnet + "[label=\"" + aux.carnet + "\n" + aux.nombre + "\n" + aux.apellido + "\n" + aux.pasword + "\"];\n"
		a := aux.pil.Primero
		for a != nil {
			nn := strconv.Itoa(n)
			nnn := strconv.Itoa(n - 1)
			if prueba == 0 {
				cadena += "node" + nn + "[label=\"" + "fecha: " + a.Fecha + " hora:" + a.Hora + "\"];\n"
				cadena += "node" + aux.carnet + "->node" + nn + ";\n"
			} else {
				cadena += "node" + nn + "[label=\"" + "fecha: " + a.Fecha + " hora:" + a.Hora + "\"];\n"
				cadena += "node" + nnn + "->node" + nn + ";\n"
			}

			//	fmt.Println(a.Fecha + "," + a.Hora)
			n++
			prueba++
			a = a.Siguiente
		}

		if aux.siguiente != nil {
			cadena += "node" + aux.carnet + "->node" + aux.siguiente.carnet + ";\n"

		}
		aux = aux.siguiente
	}
	cadena += "}"
	file := "listaS.dot"
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
	cmd := exec.Command("dot", "-Tpng", "listaS.dot", "-o", "listaS.png")
	cmd.Run()

}
