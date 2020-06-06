var inputElement = document.querySelector('.binar input');
var btn = document.querySelector('main .btn');
var one = document.querySelector('main .one');
var zero = document.querySelector('main .zero')
var area = document.querySelector('.area-resultado');
var apaga = document.querySelector('.apagar');
zero.setAttribute('onclick', 'Zero()')
one.setAttribute('onclick','One()')
btn.setAttribute('onclick','Add()');
apaga.setAttribute('onclick', 'deleteBin()')


function Add(){  
    area.innerHTML = "";

    var valueInput = inputElement.value;
    var bin = parseInt(valueInput, 2);
    var textResult  =document.createTextNode(bin);
    area.appendChild(textResult);
    inputElement.value ="";
}
function One(){
    inputElement.value = inputElement.value +1;
}
function Zero(){
    inputElement.value = inputElement.value + 0;
}
function deleteBin(){
    var inputText = inputElement.value;
    inputElement.value = inputText.substring(0,inputText.length-1);
}
