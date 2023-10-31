import Caneta from "./caneta";
import Cor from "./cores";
import EscritorBase from "./escritor";
import Lapis from "./lapis";

/*************************************************************************
 * Polimorfismo por Herança:
 * Definimos uma função que recebe a classe pai como parâmetro. 
 * Podemos passar subclasses no lugar da classe pai.
 * ***********************************************************************/

function escreverPara(escritor: EscritorBase, destino: string): void {
    escritor.escrever(`Escrevendo para ${destino}`);
}

function main() {
    // criando uma caneta azul
    const c1 = new Caneta("Bic", Cor.Azul);
    c1.escrever("Com caneta auzul");

    // criando uma caneta verde 
    const c2 = new Caneta("CIS", Cor.Verde);
    c2.escrever("Com caneta verde");

    // criando um lápis
    const c3 = new Lapis("Faber Castell");
    c3.escrever("Com lápis");

    // perceba que podemos escrever com ambos 
    // na função escreverComEscritor
    escreverPara(c3, "tela");
    escreverPara(c2, "arquivo.txt");
    escreverPara(c2, "servidor");
}

main();
