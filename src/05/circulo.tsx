import FormaGeometrica from "./forma";

class Circulo implements FormaGeometrica {
    constructor(private raio: number) { }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

export default Circulo;
