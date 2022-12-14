console.log("script is geladen");

const groentevak = document.getElementById('Groente');
const fruitvak = document.getElementById('fruit');

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = 'Hoi';
    fruitvak.appendChild(nieuwElement);
}
function zetInGroenteLa(groente){
    console.log(groente)

    
}

