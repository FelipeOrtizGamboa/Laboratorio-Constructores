function Estudiante(nombre, curso, edad, aprobado){
    this.nombre = nombre;
    this.curso = curso;
    this.edad = edad;
    this.aprobado = aprobado;
    
    this.mostrarResultado = function(){
        if(this.aprobado >= 3){
            return `Nombre del estudiante: ${this.nombre}, Curso del estudiante: ${this.curso}, Edad del estudiante: ${this.edad} años , Aprobó: ${this.aprobado = true}.`
        }else{
            return `Nombre del estudiante: ${this.nombre}, Curso del estudiante: ${this.curso}, Edad del estudiante: ${this.edad} años , Aprobó: ${this.aprobado = false}.`
        }
    };
};

const estudiante1 = new Estudiante("Ramón", "3ro", 9, 4.5)
const estudiante2 = new Estudiante("María", "6to", 12, 2)

console.log(estudiante1.mostrarResultado());
console.log(estudiante2.mostrarResultado());
