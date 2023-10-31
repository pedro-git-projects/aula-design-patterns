import Cor from "./cores";

class Caneta {
    marca: string;
    cor: Cor;

    constructor(marca: string, cor: Cor) {
        this.marca = marca;
        this.cor = cor;
    }
}

export default Caneta;
