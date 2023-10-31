import EscritorBase from "./escritor";

// Como Lapis estende EscritorBase, 
// se não reeimplementarmos o método escrever 
// ele já estará implicitamente definido.
class Lapis extends EscritorBase {
    constructor(marca: string) {
        // Precisamos passar marca para o construtor da classe pai
        // Se nenhuma cor for passada, grafite será utilizada.
        super(marca);
    }
}

export default Lapis;
