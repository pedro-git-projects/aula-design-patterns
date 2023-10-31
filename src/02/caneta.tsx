import chalk from "chalk";
import Cor from "./cores";
import Escritor from "./escritor";

// Classes precisam implementar interfaces explicitamente
// em TypeScript.
// Se removemos implements Escritor, main.tsx lancará um erro.
class Caneta implements Escritor {
    marca: string;
    cor: Cor;

    constructor(marca: string, cor: Cor) {
        this.marca = marca;
        this.cor = cor;
    }

    // Note que tudo que importa é a assinatura da função.
    // A implementação pode variar profundamente.
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
