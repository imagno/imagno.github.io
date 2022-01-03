function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(color(60,179,113));
  
  campo();
  
  desenhaAreaDoGol();
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
 
  // Jogadores A
  mostraJogadores(xJogadores[0], yJogadores[0]);
  mostraJogadores(xJogadores[1], yJogadores[0]);
  movimentaJogadorA();
  colisaoJogadoresBiblioteca(xJogadores[0], yJogadores[0]);
  colisaoJogadoresBiblioteca(xJogadores[1], yJogadores[0]);
  
  // Jogadores B
  mostraJogadores(xJogadores[2], yJogadores[1]);
  mostraJogadores(xJogadores[3], yJogadores[1]);
  movimentaJogadorB();
  colisaoJogadoresBiblioteca(xJogadores[2], yJogadores[1]);
  colisaoJogadoresBiblioteca(xJogadores[3], yJogadores[1]);
  
  incluiPlacar();
  marcaPonto();
}