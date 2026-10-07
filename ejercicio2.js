function Mascota(nombre, especie, edad, peso){
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.peso = peso;

    this.presentarse = function(){
        return `Nombre: ${this.nombre}, Especie: ${this.especie}, Edad: ${this.edad} años, Peso: ${this.peso} KG`;
    };
};

const mascota1 = new Mascota("Sauron" , "Perro" , 9 , 35);
const mascota2 = new Mascota("Mancha" , "Gato" , 12 , 14);
const mascota3 = new Mascota("Ramón" , "Loro" , 5 , 7);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());


