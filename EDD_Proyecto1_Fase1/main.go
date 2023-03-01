package main

import (
	"encoding/csv"
	"fmt"
	"migo/Lista1"
	"migo/Pila_admin"
	"migo/lista2"
	"os"
	"strings"
	"time"
)

//C:\Users\USER\Downloads\users.csv
//------------------------------------------------------------------------main-------------------------------------------------------------------

func main() {
	l1 := Lista1.NewLista()
	ll2 := lista2.NewLista()
	llp := Pila_admin.NewLista()
	r := 0
	for r == 0 {
		fmt.Println(" ")
		fmt.Println("-------------------------MENU-------------------------")
		fmt.Println("1. Iniciar sesion")
		fmt.Println("2. cerrar sistema")
		fmt.Println("------------------------------------------------------")
		fmt.Println(" ")
		fmt.Println("Ingrese una opcion: ")
		var opcion int
		fmt.Scanln(&opcion)
		switch opcion {
		case 1:
			fmt.Println("Ingrese su usuario: ")
			var usuario string
			fmt.Scanln(&usuario)
			fmt.Println("Ingrese su contraseña: ")
			var contraseña string
			fmt.Scanln(&contraseña)
			now := time.Now()
			fecha := now.Format("2006-01-02")
			hora := now.Format("15:04:05")
			bus1 := ll2.BuscarPorCarnet(usuario, contraseña, fecha, hora)
			if bus1 == true {
				fmt.Println("Usuario y contraseña correcta")
				ll2.Graff()

				//fecha y hora agregar con datetime
				//			ll2.AgregarFechaYHora(fecha, hora)
			}
			if usuario == "admin" && contraseña == "admin" {

				a := 0
				for a == 0 {
					fmt.Println(" ")
					fmt.Println("-------------------------MENU-------------------------")
					fmt.Println("1. Elegir estudiante pendiente")
					fmt.Println("2. Ver estudiantes del sistema")
					fmt.Println("3. registrar nuevo estudiante")
					fmt.Println("4. Carga masiva de estudiantes")
					fmt.Println("5. graficar estudiantes del sistema")
					fmt.Println("6. crear reporte de estudiantes del sistema")
					fmt.Println("7. graficar pila del administrador")
					fmt.Println("8. cerrar sesion")
					fmt.Println("------------------------------------------------------")
					fmt.Println(" ")
					fmt.Println("Ingrese una opcion: ")
					var opcion int
					fmt.Scanln(&opcion)
					switch opcion {
					case 1:
						//			l1.OPCION()
						aux := l1.Primero
						pr := 1
						for aux != nil {

							t := l1.Tamano()
							fmt.Println("-------------------pendientes :", t, " -------------------")
							fmt.Println("-------------Estudiante :", aux.Nombre, " --------------")
							fmt.Println("1. Aceptar al Estudiante ")
							fmt.Println("2. Rechazar al Estudiante ")
							fmt.Println("3. Salir ")
							fmt.Println("Ingrese una opcion: ")
							var opcion int
							fmt.Scanln(&opcion)
							switch opcion {
							case 1:
								fechaa := now.Format("2006-01-02")
								horaa := now.Format("15:04:05")

								llp.InsertarAlFinal("se acepto a", aux.Carnet, aux.Nombre, aux.Apellido, fechaa, horaa)

								ll2.InsertarAlInicio(aux.Nombre, aux.Apellido, aux.Carnet, aux.Pasword)
								l1.Eliminar(aux.Carnet)
								fmt.Println("Estudiante aceptado")
							case 2:
								fechaaa := now.Format("2006-01-02")
								horaaa := now.Format("15:04:05")
								llp.InsertarAlFinal("se rechazo a", aux.Carnet, aux.Nombre, aux.Apellido, fechaaa, horaaa)
								l1.Eliminar(aux.Carnet)
								fmt.Println("Estudiante rechazado")
							case 3:
								fmt.Println("Saliendo")
								break
							}
							pr++

							aux = aux.Siguiente
						}

					case 2:
						ll2.OrdenarPorCarne()
						ll2.Imprimir()
					case 3:
						fmt.Println("Ingrese el nombre del estudiante: ")
						var nombre string
						fmt.Scanln(&nombre)
						fmt.Println("Ingrese el apellido del estudiante: ")
						var apellido string
						fmt.Scanln(&apellido)
						fmt.Println("Ingrese el carnet del estudiante: ")
						var carnet string
						fmt.Scanln(&carnet)
						fmt.Println("Ingrese el pasword del estudiante: ")
						var pasword string
						fmt.Scanln(&pasword)
						l1.InsertarAlFinal(nombre, apellido, carnet, pasword)
					case 6:
						ll2.CrearJSON()
					case 4:
						fmt.Println("ingrese la direccion del archivo: ")
						var direccion string
						// leemos la direccion del archivo
						fmt.Scanln(&direccion)
						// abrimos el archivo
						archivo, err := os.Open(direccion)
						if err != nil {
							fmt.Println("Error al leer el archivo")
						}
						// leemos el archivo
						lector := csv.NewReader(archivo)
						// leemos el archivo linea por linea
						lineas, err := lector.ReadAll()
						if err != nil {
							fmt.Println("Error al leer el archivo")
						}
						// cambiamos espacio por coma
						for _, linea := range lineas {
							if linea[0] != "carnet" {

								//	fmt.Println(linea[0])
								p := strings.Replace(linea[1], " ", ",", -1)
								datos := strings.Split(p, ",")
								//	fmt.Println(datos[0], "separado", datos[1])
								//	fmt.Println(linea[2])

								l1.InsertarAlFinal(datos[0], datos[1], linea[0], linea[2])
							}

						}
					case 5:
						ll2.Graff()
					case 8:
						a = 1
					case 7:
						llp.Graficar()
					default:
						fmt.Println("Opcion no valida")

					}
				}
			}

		case 2:
			r = 1
		default:
			fmt.Println("Opcion no valida")

		}

	}

}
