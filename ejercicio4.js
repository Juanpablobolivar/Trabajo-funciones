var width = 0;
var height = 0;
var padding = 0;
var border = 0;
var style = '';
 
 
var randomStyle = Math.round (Math.random() * 1);
 
if (randomStyle == 1){
    style = 'content-box'
}else if (randomStyle == 0) {
    style = ' border-box'
}
 
width = parseInt(prompt('digite el ancho'))
height = parseInt(prompt('digite la altura'))
padding = parseInt(prompt('digite el padding'))
border = parseInt(prompt('digite el borde'))
 
if (style == 'border-box'){
    console.log('El ancho del contenido es igual a: ' + width + ' pixeles.  (border-box)')
}else if (style == 'content-box') {
    console.log('El ancho del contenido es igual a: ' + (width+padding+border) + ' pixeles  (content-box)')
}