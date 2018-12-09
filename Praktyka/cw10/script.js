window.onload = function () {


var naglowek = document.getElementById('naglowek');

console.log(naglowek);


var naglowek1 = document.querySelector('h1');
console.log();
    var paragraf = document.getElementsByClassName('paragraf');
console.log(paragraf);

var paragraf1 = document.getElementsByTagName('h1');
console.log(paragraf1);

var paragraf2 = document.querySelectorAll('.paragraf');
console.log(paragraf2);

var drugiParagraf = document.getElementsByClassName('paragraf')[0].nextSibling;
    console.log(drugiParagraf);

    document.getElementById('naglowek').textContent = 'zamieniona zawartosc';
    document.getElementById('naglowek2').innerHTML = '<i> naglowek kursywa</i>';






};

