import Ligavel from "./ligavel";

class Interruptor {
    private dispositivo: Ligavel;

    constructor(dispositivo: Ligavel) {
        this.dispositivo = dispositivo;
    }

    ligar(): void {
        this.dispositivo.ligar();
    }

    desligar(): void {
        this.dispositivo.desligar();
    }
}


export default Interruptor;
