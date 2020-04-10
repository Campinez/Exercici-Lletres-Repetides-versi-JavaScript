
var booelanvocales = false;
var booelannumeros= false;
var nombre = ["F","e","d","e","r","i","c","o","8"];
var vocales = ["a","e","i","o","u","A","E","I","O","U"];
var numeros = ["0","1","2","3","4","5","6","7","8","9"];
for (var i=0; i<nombre.length; i++){
    for (var j=0; j<vocales.length;j++){
        if (nombre[i]==vocales[j]){
            booelanvocales = true;
        }
    }
    for (var z=0; z<numeros.length;z++){
        if (nombre[i]==numeros[z]){
            booelannumeros = true;
        }
    }
    if (booelannumeros== true){
        document.write("La letra "+nombre[i]+ " es un número y los nombres no tienen números.<br>");
    }
    if (booelanvocales== false && booelannumeros== false){
        document.write("La letra "+nombre[i]+ " es consonante.<br>");
    }
    if (booelanvocales== true && booelannumeros== false){
        document.write("La letra "+nombre[i]+ " es vocal.<br>");
    }
    booelanvocales = false;
    booelannumeros= false;
}