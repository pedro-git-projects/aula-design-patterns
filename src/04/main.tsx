import Calculadora from "./calculadora";
import Visualizador from "./visualizador";

function main() {
    // Uso das classes de forma independente
    const resultadoSoma = Calculadora.somar(5, 3);
    const resultadoSubtracao = Calculadora.subtrair(10, 4);

    Visualizador.mostrarResultado(resultadoSoma);
    Visualizador.mostrarResultado(resultadoSubtracao);
}

main();
