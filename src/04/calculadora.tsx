// Responsabilidade: fazer operações matemáticas
class Calculadora {
    static somar(a: number, b: number): number {
        return a + b;
    }

    static subtrair(a: number, b: number): number {
        return a - b;
    }

    static dividir(a: number, b: number): number {
        if (a !== 0) {
            return a / b;
        }
        return NaN;
    }

    static multiplicar(a: number, b: number): number {
        return a * b;
    }
}

export default Calculadora;
