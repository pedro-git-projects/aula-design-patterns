import chalk from "chalk";
import Cor from "./cores";
import Escritor from "./escritor";

// Classes precisam implementar interfaces explicitamente
// em TypeScript.
// Se removemos implements Escritor, main.tsx lancará um erro.
class Lapis implements Escritor {
    marca: string;
    cor: Cor;

    constructor(marca: string) {
        this.marca = marca;
        this.cor = Cor.Grafite;
    }

    escrever(conteudo: string): void {
        console.log(chalk.gray(conteudo));
    }

}

export default Lapis;
