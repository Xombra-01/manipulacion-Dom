var estudiantes = ["Carlos", "Maria", "Sandra", "Stevan"];

function Saludar(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){

    var estudiante= estudiantes.shift();

    Saludar(estudiante);

}

