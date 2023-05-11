
let ingresos = [     //WADAFAK?!??!?!S
    //new Ingreso("Salario", 20000),
    //new Ingreso("Venta Auto", 50000)
]
let egresos = [
    //new Egreso("Renta", 4000),
    //new Egreso("Ropa", 800)
]

var cargarCabecero = () => {
    var presupuesto = totalIngresos() - totalEgresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(presupuesto);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());

    var porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log();
    console.log(porcentajeEgreso);
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
};

var totalIngresos = () => {
    var totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.getparamValor();
    }
    return totalIngresos;
};

var totalEgresos = () => {
    var totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso;
    }
    return totalEgreso;
};


formatoMoneda = (presupuesto) => {
    return presupuesto.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
}

formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        currency: 'MXN',
        minimumFractionDigits: 2

    });
}

cargarIngresos = () => {
    var ingresosHTML;
    for (let ingreso of ingresos) {
        ingresosHTML = ingresosHTML + crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}
// cargar template script dinamicamente ???
crearIngresoHTML = (ingreso) => {
    var ingresoHTML = ` 
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">
            ${ingreso._descripcion}
        </div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">
                ${formatoMoneda(ingreso._valor)}
            </div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar_btn">
                    <ion-icon name="close-circle-outline" onClick="eliminarIngreso(${ingreso.getId()})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
`;
return ingresoHTML;
}

cargarEgresos = () => {
    var egresosHTML;
    for (let egreso of egresos) {
        egresosHTML = egresosHTML + crearEgresosHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}
// cargar template script dinamicamente ???
crearEgresosHTML = (egreso) => {
    var egresoHTML = ` 
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">
            ${egreso._descripcion}
        </div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">
                ${formatoMoneda(egreso._valor)}
            </div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar_btn">
                    <ion-icon name="close-circle-outline" onClick="eliminarEgreso(${egreso.getId()})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
`;
return egresoHTML;
}

eliminarEgreso = (id) => {

    //metodo para comparar ids? " crea una variable llamada indiceEliminar y asígnale el
    //método findIndex del arreglo egresos. En este método, obtén el índice del elemento
    //que se desea eliminar, a través de una función flecha que pasa como parámetro."

    //indiceEliminar = ingreso.findIndex(id);
    //egresos.splice(indiceEliminar, 1);
    egresos.splice(id, 1);
    cargarCabecero();
    cargarEgresos();
}

eliminarIngreso = (id) => {

    indiceEliminar = ingreso.findIndex(id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}



cargarApp = () => {

    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

agregarDato = () => {

    var forma = document.getElementById("forma");
    var tipo = document.getElementById("tipo").value;
    var descripcion = document.getElementById("descripcion").value;
    var valor = document.getElementById("valor").value;

    if (descripcion !== '' && valor !== ''){
        console.log("El tipo es : "+ tipo);
        if(tipo == "ingreso"){
            ingresos.push(new Ingreso(descripcion,valor));
            cargarIngresos();
        }else{
            egresos.push(new Egreso(descripcion,valor));
            cargarEgresos();

        }
    }



}