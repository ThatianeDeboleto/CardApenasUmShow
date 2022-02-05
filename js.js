var carta1 = {
  nome: "Pairulito",
  foto: "<img src='http://3.bp.blogspot.com/-HaF8l0UtsRs/UCp_ziFUOVI/AAAAAAAACKM/NFnlRed3MJ0/s1600/reg_pops_174x252.png' >",
  atributos: {
      poderes: 25,
      inteligencia: 97,
      alegria: 95,
      sabedoria: 85,
      amizade: 100
  }
}
var carta2 = {
  nome: "Mordecai",
  foto: "<img src='https://static.wikia.nocookie.net/apenasumshow/images/8/8c/250px-Mordecai_character.png/revision/latest/smart/width/250/height/250?cb=20150110202237&path-prefix=pt-br' >",
  atributos: {
      poderes: 30,
      inteligencia: 73,
      alegria: 10,
      sabedoria: 5,
      amizade: 11
  }
}
var carta3 = {
  nome: "Rigby",
  foto: "<img src='http://4.bp.blogspot.com/-xxuZY7CPS9c/UCp_RDUC45I/AAAAAAAACKE/m3O8uJdZWXQ/s1600/reg_rigby_174x252.png' >",
  atributos: {
      poderes: 45,
      inteligencia: 84,
      alegria: 85,
     sabedoria: 20,
      amizade: 8
  }
}
var carta4 = {
  nome: "Musculoso",
  foto: "<img src='http://3.bp.blogspot.com/-Svk6wAGvWt8/UCqAPu1BgVI/AAAAAAAACKU/4hEiYjKDGtA/s1600/reg_muscleman_174x252.png' >",
  atributos: {
      poderes: 12,
      inteligencia: 78,
      alegria: 8,
      sabedoria: 15,
      amizade: 13
  }
}
var carta5 = {
  nome: "Saltitão",
  foto: "<img src='http://1.bp.blogspot.com/-pDzVKQ6eF1s/UCqA5dcB5GI/AAAAAAAACKc/X1-pkykxcWU/s1600/reg_skips_174x252.png' >",
  atributos: {
      poderes: 16,
      inteligencia: 92,
      alegria: 85,
      sabedoria: 25,
      amizade: 15
  }
}
var carta6 = {
  nome: "Margarete",
  foto: "<img src='http://3.bp.blogspot.com/-lOzR5LMUKeA/UCqBevDIrhI/AAAAAAAACKk/T-JC9l8UVsI/s1600/reg_margaret_174x252.png' >",
  atributos: {
      poderes: 54,
      inteligencia: 79,
      alegria: 58,
      sabedoria: 31,
      amizade: 19
  }
}
var carta7 = {
  nome: "Fantasmão",
  foto: "<img src='http://2.bp.blogspot.com/-xi18Ldb-8UQ/UCqEbPdwqLI/AAAAAAAACK4/yq-rGmE29B0/s1600/reg_highfiveghost_174x252.png' >",
  atributos: {
      poderes: 13,
      inteligencia: 67,
      forca: 8,
      sabedoria: 12,
      amizade: 17
  }
}
var carta8 = {
  nome: "Benson",
  foto: "<img src='http://4.bp.blogspot.com/-thB6MJVdMfs/UCqE2z9zBUI/AAAAAAAACLA/mEv1SEVsm5Q/s1600/reg_benson_174x252.png' >",
  atributos: {
      poderes: 9,
      inteligencia: 67,
      forca: 8,
      sabedoria: 12,
      amizade: 10
  }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
  var numeroCartaMaquina = (Math.floor(Math.random() * (7 - 0 + 1)) + 0);
  cartaMaquina = cartas[numeroCartaMaquina];
  // console.log(cartaMaquina);

  var numeroCartaJogador = (Math.floor(Math.random() * (7 - 0 + 1)) + 0);
  while(numeroCartaJogador == numeroCartaMaquina){
      numeroCartaJogador = (Math.floor(Math.random() * (7 - 0 + 1)) + 0);
  }
  cartaJogador = cartas[numeroCartaJogador];
  // console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  var suaCarta = "";
  suaCarta += "<h3>" + cartaJogador.nome +"</h3>";
  suaCarta += "<p>" + cartaJogador.foto +"</p>";
  suaCarta += "<p> Poderes: " + cartaJogador.atributos.poderes + "</p>";
  suaCarta += "<p> Inteligência: " + cartaJogador.atributos.inteligencia + "</p>";
  suaCarta += "<p> Alegria: " + cartaJogador.atributos.alegria + "</p>";
  suaCarta += "<p> Sabedoria aventureiro: " + cartaJogador.atributos.sabedoria + "</p>";
  suaCarta += "<p> Amizade: " + cartaJogador.atributos.amizade + "</p>";

  document.getElementById("player").innerHTML = suaCarta;

  var cartaOponente = "";
  cartaOponente += "<h3>" + cartaMaquina.nome +"</h3>";
  cartaOponente += "<p>" + cartaMaquina.foto +"</p>";
  cartaOponente += "<div class='oponente' id='oponente'><p> Poderes: " + cartaMaquina.atributos.poderes + "</p>";
  cartaOponente += "<p> Inteligência: " + cartaMaquina.atributos.inteligencia + "</p>";
  cartaOponente += "<p> Alegria: " + cartaMaquina.atributos.alegria + "</p>";
  cartaOponente += "<p> Sabedoria: " + cartaMaquina.atributos.sabedoria + "</p>";
  cartaOponente += "<p> Amizade: " + cartaMaquina.atributos.amizade + "</p></div>";

  document.getElementById("computador").innerHTML = cartaOponente;

  document.getElementById("player").style.visibility = "visible";
  document.getElementById("computador").style.visibility = "visible";

  exibirOpcoes();
}

function exibirOpcoes(){
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for(var atributo in cartaJogador.atributos){
    // console.log(atributo);
    opcoesTexto += "<div class='escolha'><input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "</div>";
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName("atributo");
  for(var i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked){
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  document.getElementById("oponente").style.visibility = "visible";

  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    // alert("Parabéns, você venceu!");
    Swal.fire({
      icon: 'success',
      title: 'Parabéns',
      text: 'Você venceu!'
    })
  } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    // alert("Não foi dessa vez");
    Swal.fire({
      icon: 'error',
      title: 'Não foi dessa vez',
      text: 'Você perdeu.'
    })
  } else {
    // alert("Vocês empataram");
    Swal.fire({
      icon: 'info',
      title: 'Vocês empataram',
      text: 'Tente novamente.'
    })
  }
}
