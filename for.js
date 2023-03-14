var estudiantes = ["Carlos", "Maria", "Sandra", "Stevan"];

function Saludar(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i =0; i <estudiantes.length; i++){

    Saludar(estudiantes[i]);
}

//Otra forma
var estudiantes = ["Carlos", "Maria", "Sandra", "Stevan"];

function Saludar(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
    Saludar(estudiante);
}






