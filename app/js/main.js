(function(){
  function nombrar(nombre){
    return nombre;
  }
  function saludar(nombre){
    console.info(nombre,",saludos");
  }
  saludar(nombrar("Andy"));
})();
