// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// velocidade da bolinha
let xVelocidadeBolinha = 5;
let yVelocidadeBolinha = 5;

let colidiu = false;

function mostraBolinha() {
  fill(color(255, 255, 255));
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha() {
  xBolinha += xVelocidadeBolinha;
  yBolinha += yVelocidadeBolinha;
}

function verificaColisao() {
   if (xBolinha + raio > width || xBolinha - raio < 0) {
    xVelocidadeBolinha *= -1;
  }
  
  if (yBolinha + raio > height|| yBolinha - raio < 0 ) {
    yVelocidadeBolinha *= -1;
  }
}

function marcaPonto() {
  if(xBolinha > 590 && yBolinha > 129 && yBolinha < 251) {
    pontosJogadorA += 1;
    ponto.play();
    exibeTexto("GOoOoOooOoOoooOoo!!");
    resetaJogo(-5);
  }else if(xBolinha < 10 && yBolinha > 129 && yBolinha < 251) {
    pontosJogadorB += 1;
    ponto.play();
    exibeTexto("GOoOoOooOoOoooOoo!!");
    resetaJogo(5);
  }
}

function exibeTexto(texto) {
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(160, 180, 300, 25)
  fill(color(255, 255, 255));
  text(texto, 313, 200);
}

function resetaJogo(direcaoBolinha) {
  xBolinha = 300;
  yBolinha = 200;
  xVelocidadeBolinha = direcaoBolinha;
  yVelocidadeBolinha = 5;
}