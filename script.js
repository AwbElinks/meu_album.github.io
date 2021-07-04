function mostra_album(){
  var a = document.querySelector(".card");
  a.style.left='-100%';
  a.style.transition='.5s';
}

function voltarCapa(){
  var voltar = document.querySelector(".card");
  voltar.style.left='0';
}
