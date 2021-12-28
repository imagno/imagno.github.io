// variaveis area do gol
let xPosicaoDoGol = [1, 596];
let yPosicaoDoGol = 155;
let xAreaDoGol = 3;
let yAreaDoGol = 90;

// placar do jogo
let pontosJogadorA = 0;
let pontosJogadorB = 0;

// sons do jogo
let raquetada, ponto, trilha;

function preload() {
  trilha = loadSound("sons/trilha.mp3");
  ponto = loadSound("sons/ponto.mp3");
  raquetada = loadSound("sons/raquetada.mp3");
}

function campo() {
  
  // linha superior
  rect(10, 5, 580, 2);
  // linha inferior
  rect(10, 395, 580, 2);
  // linha da esquerda
  rect(9, 5, 2, 390);
  // linha da direita
  rect(589, 5, 2, 390);
  
  // linha do meio campo
  rect(299, 5, 2, 390);
  // marcação central
  circle(300, 200, 6);
  
  noFill();
  strokeWeight(2);
  stroke(255,255,255);
  
  // círculo central
  ellipse(300, 200, 100);

  
  // área zaga esquerda
  arc(70, 200, 50, 90, (PI * 3)/2, PI/2);
  circle(545, 200, 3);
  rect(10, 120, 60, 1);
  rect(70, 120, 1, 160);
  rect(10, 280, 60, 1);
  rect(10, 150, 30, 1);
  rect(40, 150, 1, 100);
  rect(10, 250, 30, 1);
  
  // área zaga direita
  arc(530, 200, 50, 90, PI/2, (PI * 3)/2);
  circle(55, 200, 3);
  rect(530, 120, 60, 1);
  rect(530, 120, 1, 160);
  rect(530, 280, 60, 1);
  rect(560, 150, 30, 1);
  rect(560, 150, 1, 100);
  rect(560, 250, 30, 1);
  
  // arco superior esquerdo
  arc(9, 9, 20, 20, 0, PI/2);
  // arco superior direito
  arc(591, 9, 20, 20, PI/2, PI);
  // arco inferior direito
  arc(591, 393, 20, 20, PI, 3*PI/2);
  // arco inferior esquerdo
  arc(9, 393, 20, 20, 3*PI/2, PI*2);
}

function desenhaAreaDoGol() {
  for(let i = 0; i < xPosicaoDoGol.length; i++) {
    rect(xPosicaoDoGol[i], yPosicaoDoGol, xAreaDoGol, yAreaDoGol);
  }
}

function colisaoJogadoresBiblioteca(x, y) {
  colidiu = collideRectCircle(x, y, larguraJogadores, alturaJogadores, xBolinha, yBolinha, raio);
  
  if(colidiu) {
    xVelocidadeBolinha *= -1.03;
    yVelocidadeBolinha *= 1.03;
    raquetada.play();
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 140, 0));
  rect(252, 10, 40, 25);
  fill(255);
  text(pontosJogadorA, 272, 31);
  fill(color(255, 140, 0));
  rect(308, 10, 40, 25);
  fill(255);
  text(pontosJogadorB, 328, 31);
}