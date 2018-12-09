window.onload = function () {
    var nowyElement = document.createElement('li');
    var nowyWezelTekstowy = document.createTextNode('element 3');

    nowyElement.appendChild(nowyWezelTekstowy);

    document.getElementById('lista').appendChild(nowyElement);

    var element1 = document.getElementById('elementPierwszy');
    var elementNadrzędny = document.getElementById('lista');
    elementNadrzędny.removeChild(element1);

    document.getElementById('do ukrycia').setAttribute('hidden', true);
    document.getElementById('ukryty').removeAttribute('hidden');
    




};


