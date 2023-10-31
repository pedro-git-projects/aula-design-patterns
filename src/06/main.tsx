import Animal from "./animal";
import Cachorro from "./cachorro";
import Gato from "./gato";

// Como nenhum dos subtipos de Animal quebram o comportamento do 
// animal, podemos substituir animal por seus subtipos.
// Configurando assim princípio da substituição de Liskov.
function ouvirAnimalFazerBarulho(animal: Animal): void {
    animal.fazerBarulho();
}

function main() {
    const cachorro = new Cachorro('Rex');
    const gato = new Gato('Whiskers');

    ouvirAnimalFazerBarulho(cachorro);
    ouvirAnimalFazerBarulho(gato);
}

main();

