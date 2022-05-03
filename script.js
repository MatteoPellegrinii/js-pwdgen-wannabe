const nome = prompt("What's your name?");
console.log(nome);


const surname = prompt ("What's your last name?")
console.log(surname);


const color = prompt ("What's your favorite color?")
console.log(color);

const password = nome + surname + color + 21;
console.log(password);



document.getElementById("name").innerHTML = `${nome}`;
document.getElementById("surname").innerHTML = `${surname}`;
document.getElementById("color").innerHTML = `${color}`;
document.getElementById("password").innerHTML = `Ciao ${nome} questa è la tua password: ${password}`;