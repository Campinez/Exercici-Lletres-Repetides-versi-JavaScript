

var nombre = ["F","e","d","e","r","i","c","o",];
var contador = 0;
for (var i=0; i<nombre.length; i++){
    for (var j=0; j<nombre.length;j++){
        if (nombre[i]==nombre[j]){
            contador += 1 ;
        }
    }
    document.write("La letra " + nombre[i] + " aparece  "+contador+" veces <br>");
    contador = 0;
}
