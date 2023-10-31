import Caneta from "./caneta";
import Cor from "./cores";

function main() {
    /**********************************
     * Instanciando a classe Caneta
     * *******************************/
    const c1 = new Caneta("Bic", Cor.Azul);
    const c2 = new Caneta("Cis", Cor.Vermelha);
    const c3 = new Caneta("Faber Castell", Cor.Preta);

    // Como seria de se esperar, c1, c2 e c3 são diferentes
    console.log(c1 === c2 || c1 === c3 || c3 === c2);

    // Entretanto isso não ocorre porque seus campos são diferentes
    // c4 tem os mesmos campos que c1, mas c1 === c4 retorna false.
    // Isso ocorre porque operadores de comparação aplicados a objetos 
    // comparam ENDEREÇOS DE MEMÓRIA, não valores de campos
    const c4 = new Caneta("Bic", Cor.Azul);

    console.log(c1 === c4); // false

    // Caso queiramos avaliar igualdade de objetos a nível de propriedades
    // precisamos acessar cada um de seus campos manualmente OU
    // utilizar o método JSON.stringfy
    console.log(c1.marca === c4.marca && c1.cor === c4.cor);
    console.log(JSON.stringify(c1) === JSON.stringify(c4));

    /********************************************************
     * Atribuição por cópia 
     * ******************************************************/
    // Atribuição de tipos primitivos cria uma 
    // cópia da variável envolvida

    let a = 1; // Declarando a diretamente 
    let b = a; // O valor guardado em a '1' é copiado para b
    b = 2; // o valor de b é substituido de forma independente de a 
    console.log(b === a); // false

    /********************************************************
     * Atribuição por referência
     * ******************************************************/
    // Já na atribuição de objetos, o que é copiado não é o valor
    // de cada campo, uma vez que uma cópia desse tipo seria custosa.
    // Copiamos apenas uma variável que armazena o endereço de memória 
    // do objeto.
    // Assim sendo c5 = c4, faz com que c5 seja uma REFERÊNCIA para c4.
    const c5 = c4
    console.log(c4 === c5); // true, c5 e c4 possuem o mesmo endereço de memória

    // alterar o valor de um campo de um objeto alterará todas as suas referências
    c5.cor = Cor.Verde;
    console.log(Cor[c4.cor]); // logo, alterar c5 causou a cor de c4 a passar para verde
}

main();
