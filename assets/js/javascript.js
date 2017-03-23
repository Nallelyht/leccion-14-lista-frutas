
function agregarFruta(){
    var nuevaFruta=document.getElementById("nuevaFruta").value;
    if(nuevaFruta.length>0)
    {
      var fruta=document.createElement('li');
      fruta.id=nuevaFruta;
      fruta.innerHTML=nuevaFruta;
      document.getElementById("listaOrdenada").appendChild(fruta);
    }
    return false;
};
function eliminarFruta() {
    var fruta = document.getElementById("listaOrdenada");
    var largoFruta = document.getElementsByTagName('li').length;
    largoFruta--
    fruta.removeChild(fruta.childNodes[largoFruta]);
    console.log(largoFruta);
};
