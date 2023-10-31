import Circulo from "./circulo";
import FormaGeometrica from "./forma";
import Retangulo from "./retangulo";

// Função que calcula a soma das áreas de várias formas geométricas.
// Perceba que podemos ESTENDER FormaGeometrica criando novas 
// implementações da interface.
// Sem precisar MODIFICAR a interface.
// Sendo assim um exemplo de Open/Closed principle.
function calcularSomaDasAreas(formas: FormaGeometrica[]): number {
    let soma = 0;
    for (const forma of formas) {
        soma += forma.calcularArea();
    }
    return soma;
}

function main() {
    const retangulo = new Retangulo(5, 4);
    const circulo = new Circulo(3);

    const somaDasAreas = calcularSomaDasAreas([retangulo, circulo]);
    console.log(`A soma das áreas é: ${somaDasAreas}`);
}

main();
