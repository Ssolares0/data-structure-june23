package Estructuras

import (
	//"io/ioutil"
	"fmt"
	"os"
	//"os/exec"
)

/*
Este archivo create.go se encargara de crear los archivos .dot y sobrescibir en el, para
luego poder graficarlos con graphviz

*/

/*
funcion createarch se encarga de crear el archivo .dot
*/
func createArch(nombre string) {
	var _, err = os.Stat(nombre)

	if os.IsNotExist(err) {
		var file, err = os.Create(nombre)
		if err != nil {
			return
		}
		defer file.Close()
	} else {
		var filee, err = os.Create(nombre)
		filee.WriteString("")
		if err != nil {
			return
		}
		defer filee.Close()

	}
}

/*
funcion escribirEnArch se encarga de sobrescribir en el archivo .dot
*/
func escribirEnArch() {
	fmt.Println("escribir en archivo")
}
