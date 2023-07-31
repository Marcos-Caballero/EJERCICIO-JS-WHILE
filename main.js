/* EJERCICIO 1 */
const numeroUsuario = parseInt(prompt("Introduce un numero:"));

console.log("Los multiplos de 5 hasta el numero ", numeroUsuario, "son:");

let i = 1;
while (i <= numeroUsuario) {
    if (i % 5 === 0){
        console.log(i);
    }
    i++
}

/* EJERCICIO 2 */
console.log("Y los ganadores son...")

const numero1 = parseInt(prompt("Ingresa el primer numero entre 1 y 50"));
const numero2 = parseInt(prompt("Ingresa el segundo numero entre 1 y 50"));

let i2 = 1;
while (i2 <= 50) {
    if (i2 === numero1 || i2 === numero2) {
        console.log(i2 + " ¡Loteria!");
    } else {
        console.log(i2);
    }
    i2++
}

/* EJERCICIO 3 */   

let meterNumeros = parseInt(prompt("Ingresa numeros y para terminar ingresa 0"));
const numerosGuardados = [];

while (meterNumeros != 0) {
    numerosGuardados.push(meterNumeros);
    meterNumeros = parseInt(prompt("Ingresa numeros y para terminar ingresa 0"));
}

console.log("Los numeros guardados son: ", numerosGuardados)

/* EJERCICIO 4 */

let meterCosas = prompt("ingresa letras o palabras");
const cosasGuardadas = [];

while (meterCosas === "") {
    cosasGuardadas.push(meterCosas);
    meterCosas = prompt("ingresa letras o palabras");
}

console.log(cosasGuardadas)

/* EJERCICIO 5 */

let diaSemana = '';

while (diaSemana !== 'domingo') {
    diaSemana = prompt("Introduce un día de la semana (lunes, martes, miércoles, jueves, viernes, sábado, domingo):");

    switch (diaSemana.toLowerCase()) {
    case 'lunes':
        alert("¡Es lunes! ¡Let's goooooo!");
        break;
    case 'martes':
        alert("¡Es martes! Hazlo mejor que ayer :).");
        break;
    case 'miércoles':
        alert("¡Es miércoles! vas por la mitad");
        break;
    case 'jueves':
        alert("¡Es jueves! Ya mañana es viernes, aguanta capo");
        break;
    case 'viernes':
        alert("¡Es viernes! ¿Donde es la fiestusky esta noche?");
        break;
    case 'sábado':
        alert("¡Es sábado! ¿Como va ese guayabo?");
        break;
    case 'domingo':
        alert("Ve a descansar campeón, mañana inicias de nuevo");
        break;
    default:
        alert("No digas mmdas Mery Jane, pon un dia valido");
    }
}
