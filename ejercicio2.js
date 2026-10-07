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

//¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utlizando la palabra clave this

//RTA: Porque hacemos referencia directamente a la propiedad sin necesidad de modificar el propio nombre de la variable
