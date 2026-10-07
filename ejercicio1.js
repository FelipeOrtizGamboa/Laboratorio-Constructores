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

// ¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal 
// estructurado individualmente para cada computador?

// RTA: Nos permite tener un código más organizado y de fácil entendimiento para la administración y mantenimineto,
// en grandes volumenes de información nos permite realizar modificaciones en general sin tener que cambiar valor por valor.
