class Egreso extends Dato {
    static contadorEgresos = 0;
    #id;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        ++this.constructor.contadorEgresos;
        this.#id = this.constructor.contadorEgresos;
    }

    getId = () => {
        return this.#id;
    }
}