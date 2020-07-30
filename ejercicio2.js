var  a= 0;
var b = 0;
var c = 0;
var d = 0;
var media = 0;

a = parseInt(prompt('Digita un número a'));
b = parseInt(prompt('Digita un número b'));
c = parseInt(prompt('Digita un número c'));
d = parseInt(prompt('Digita un número d'));


media = hacerMedia (a,b,c,d);
function hacerMedia (nA, nB, nC, nD) {
    const resultado = (nA+nB+nC+nD)/4;
    console.log('El resultado de la media es: ' + resultado);
    
}
