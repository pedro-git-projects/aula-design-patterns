import Interruptor from "./interruptor";
import Lampada from "./lampada";

/*******************************************************************************
 * módulos de alto nível não dependem diretamente 
 * de módulos de baixo nível, 
 * ambos dependem de abstrações. 
 *
 * Interruptor é o módulo de alto nível que representa um interruptor. 
 * Essa classe aceita um objeto como parâmetro, 
 * mas não depende diretamente da classe concreta Lampada
 *
 * A classe Lampada é o módulo de baixo nível que representa uma lâmpada, 
 * mas o módulo de alto nível (Interruptor) não depende diretamente dela.
 *
 * Ocorre abstração por meio de uma interface chamada Ligavel. 
 * Tanto a classe Interruptor quanto a classe Lampada dependem dessa abstração. 
 * O Interruptor recebe um objeto que implementa a interface Ligavel. 
 *
 * Poderíamos adicionar outros dispositivos  que implementassem a interface Ligavel
 * sem alterar a classe Interruptor, demonstrando assim a aderência ao DIP.
 **********************************************************************************/

function main() {
    const l = new Lampada();
    const interruptor = new Interruptor(l);
    interruptor.ligar();
    interruptor.desligar();
}

main();
