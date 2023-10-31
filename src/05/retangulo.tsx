import FormaGeometrica from "./forma";

class Retangulo implements FormaGeometrica {
    constructor(private largura: number, private altura: number) { }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

export default Retangulo;
