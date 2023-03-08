const h1 = document.querySelector('h1');
const form = document.querySelector("#formulario");
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector("#btncalcular");
const resultado = document.querySelector("#result");

form.addEventListener("submit",sumarInputValue);

function sumarInputValue(event){
event.preventDefault();
const suma = input1.value + input2.value;
resultado.innerText = "Resultado:" + suma;
}

/*console.log(input.value);

console.log({
h1,
p,
parrafito,
pid,
input
});


h1.innerHTML= "Carlos <br> Charris";
h1.innerText= "Carlos <br> Charris";
//console.log(h1.getAttribute("Pantalla"));
//h1.setAttribute("class", "rojo");
h1.classList.add("rojo");
h1.classList.remove("ochoa");
//h1.classList.toggle("rojo");
//h1.classList.contains("rojo");
input.value= "456";


const img = document.createElement("img");
img.setAttribute("src", "https://images.app.goo.gl/ydL9buK6GxeYnTXaA");
console.log(img);

pid.append(img);*/

