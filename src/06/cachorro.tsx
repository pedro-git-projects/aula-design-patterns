import Animal from "./animal";

class Cachorro extends Animal {
    fazerBarulho(): void {
        console.log('O cachorro late.');
    }
}

export default Cachorro;
