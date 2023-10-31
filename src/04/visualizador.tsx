import Calculadora from "./calculadora";

// Responsabilidade: exibir resultados
class Visualizador {
    static mostrarResultado(resultado: number): void {
        console.log(`O resultado é: ${resultado}`);
    }
}

export default Visualizador;
