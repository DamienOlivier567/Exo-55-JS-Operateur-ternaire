let paragraphe = document.getElementById('paragraphe')
console.log(paragraphe);
paragraphe.style.backgroundColor = 'blue';
paragraphe.style.color = 'white';


let span = document.getElementById('span')
console.log(span);


let spa = document.getElementById('spa')
console.log(spa);


let a = 5;
let b = 12;
let result = document.getElementById('result')
result.innerHTML = (a === 5 && b === 12) ? (a + b).toString() : (b - a).toString()
