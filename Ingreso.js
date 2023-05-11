class Ingreso extends Dato {
    static contadorIngresos = 0;
    #id;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        ++this.constructor.contadorIngresos;
        this.#id = this.constructor.contadorIngresos;
    }

    getId = () => {
        return this._id;
    }
    
    
}



