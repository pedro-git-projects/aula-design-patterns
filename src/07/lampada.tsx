import Ligavel from "./ligavel";

class Lampada implements Ligavel {
    constructor() { }

    ligar(): void {
        console.log("ligada");
    }

    desligar(): void {
        console.log("desligada");
    }
}

export default Lampada;
