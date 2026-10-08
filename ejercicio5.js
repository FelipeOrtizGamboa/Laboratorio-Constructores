const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, año, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.precio = precio;

    this.mostrarInformacion = function () {
        return `${this.marca} ${this.modelo} (${this.año}), color ${this.color}, precio: $${this.precio}`;
    };

    this.actualizarPrecio = function (nuevoPrecio) {
        this.precio = nuevoPrecio;
        return `Precio actualizado: $${this.precio}`;
    };

    this.encender = function () {
        return `El ${this.marca} ${this.modelo} está encendido.`;
    };
}

function solicitarVehiculo(numero) {
    const marca = prompt(`Vehículo ${numero}: ingresa la marca: `);
    const modelo = prompt(`Vehículo ${numero}: ingresa el modelo: `);
    const año = Number(prompt(`Vehículo ${numero}: ingresa el año: `));
    const color = prompt(`Vehículo ${numero}: ingresa el color: `);
    const precio = Number(prompt(`Vehículo ${numero}: ingresa el precio: `));

    return new Vehiculo(marca, modelo, año, color, precio);
}

const vehiculos = [
    solicitarVehiculo(1),
    solicitarVehiculo(2),
    solicitarVehiculo(3)
];

vehiculos.forEach((vehiculo, indice) => {
    console.log(`Vehículo ${indice + 1}:`);
    console.log(vehiculo.mostrarInformacion());
    console.log(vehiculo.encender());
});

const nuevoPrecio = Number(prompt("Ingresa el nuevo precio del primer vehículo: "));
console.log(vehiculos[0].actualizarPrecio(nuevoPrecio));
console.log(vehiculos[0].mostrarInformacion());