import Caneta from "./caneta";
import Cor from "./cores";
import Escritor from "./escritor";
import Lapis from "./lapis";

/*************************************************************************
 * Definindo uma função que recebe uma interface como parâmetro 
 * podemos tratar tipos distintos como se fossem o mesmo tipo.
 * Já que podemos garantir que tem a característica exigida pela interface
 * ***********************************************************************/

function escreverPara(escritor: Escritor, destino: string): void {
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
