import chalk from "chalk";
import Cor from "./cores";

class EscritorBase {
    marca: string;
    cor: Cor;

    constructor(marca: string, cor: Cor = Cor.Grafite) {
        this.marca = marca;
        this.cor = cor;
    }

    escrever(conteudo: string): void {
        // Esse método pode ser sobrescrito pelas subclasses 
        console.log(chalk.gray(conteudo));
    }
}

export default EscritorBase;
