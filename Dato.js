class Dato {
    constructor(descripcion, valor){
        this._descripcion= descripcion;
        this._valor= valor;
    }
    get = () => {
        return this._descripcion
    }
    set = (descripcion) => {
        this._descripcion = descripcion
    }
}