// Recomendamos hacer esto SIEMPRE con funciones establecidas como estándar que no vayan a sufrir cambios

// String.prototype.trimStart
if(String.prototype.trimStart === undefined){
  String.prototype.trimStart = function(){
    return this.replace(/^\s*/,'');
  };
}
// versión corta
''.trimStart || (String.prototype.trimStart = function(){
    return this.replace(/^\s*/,'');
});
