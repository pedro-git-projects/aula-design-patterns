import chalk from "chalk";
import Cor from "./cores";
import EscritorBase from "./escritor";

class Caneta extends EscritorBase {
    constructor(marca: string, cor: Cor) {
        super(marca, cor);
    }

    // Aqui estamos sobreescrevendo o método escrever originalmente definido 
    // na classe pai.
    escrever(conteudo: string): void | never {
        switch (this.cor) {
            case Cor.Azul:
                console.log(chalk.blue(conteudo));
                break;
            case Cor.Preta:
                console.log(chalk.black(conteudo));
                break;
            case Cor.Verde:
                console.log(chalk.green(conteudo));
                break;
            case Cor.Vermelha:
                console.log(chalk.red(conteudo));
                break;
            case Cor.Grafite:
                throw new Error("Grafite não é uma cor de caneta");
            default:
                throw new Error("Cor desconhecida");
        }
    }

}

export default Caneta;
