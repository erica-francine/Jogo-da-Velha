# PROJETO JOGO DA VELHA

Uma implementação simples do clássico jogo "Jogo da Velha" com HTML, CSS e JavaScript.

## Como jogar:

1.	Abra o arquivo index.html em um navegador da web.
2.	Os jogadores se revezam clicando nas casas para colocar seus símbolos ('X' ou 'O').
3.	O primeiro jogador a conseguir três dos seus símbolos em uma linha (horizontal, vertical ou diagonal) vence o jogo.
4.	Clique no botão "Reiniciar" para recomeçar o jogo.

## Estrutura do Projeto:

* **index.html:** O arquivo HTML principal contendo o tabuleiro do jogo e elementos de interface.
* **style.css:** A folha de estilos que define a aparência visual do jogo.
* **scripts/game.js:** Arquivo JavaScript responsável por gerenciar a lógica do jogo e determinar o vencedor.
* **scripts/interface.js:** Arquivo JavaScript responsável por lidar com eventos de interface e reiniciar o jogo.

## Lógica do jogo:

O jogo utiliza uma grade 3x3 onde os jogadores se alternam colocando seus símbolos ('X' ou 'O') em casas vazias. O jogo verifica a condição de vitória após cada jogada e exibe o vencedor ou um empate. O jogo pode ser reiniciado clicando no botão "Reiniciar".

