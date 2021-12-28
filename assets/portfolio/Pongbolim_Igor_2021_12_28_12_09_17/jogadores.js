let xJogadores = [70, 380, 521, 210];
let yJogadores = [155, 155];
let larguraJogadores = 10;
let alturaJogadores = 90;

function mostraJogadores(x, y) {
  for(let i = 0; i < xJogadores.length; i++) {
    if(x === xJogadores[0] || x === xJogadores[1]); {
      fill(color(72, 209, 204));
    }
    if(x === xJogadores[2] || x === xJogadores[3]) {
      fill(color(255, 182, 193));
    }
  }
  
  rect(x, y, larguraJogadores, alturaJogadores);
}

function movimentaJogadorA() {
  if (keyIsDown(87) && yJogadores[0] > 0) {
    yJogadores[0] -= 10;
  }
  
  if (keyIsDown(83) && yJogadores[0] < 310) {
    yJogadores[0] += 10;
  }
}

function movimentaJogadorB() {
  if (keyIsDown(UP_ARROW) && yJogadores[1] > 0) {
    yJogadores[1] -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW) && yJogadores[1] < 310) {
    yJogadores[1] += 10;
  }
}