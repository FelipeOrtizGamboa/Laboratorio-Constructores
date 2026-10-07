function Computador(marca, procesador, RAM, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.RAM = RAM;
    this.precio = precio;
};

const c1 = new Computador("HP", "Ryzen 9", 32, 1800000);
const c2 = new Computador("LENOVO", "Intel Core i9", 64, 2200000);
const c3 = new Computador("ASUS", "Ryzen 5", 20, 1550000);

console.log(c1);
console.log(c2);
console.log(c3);