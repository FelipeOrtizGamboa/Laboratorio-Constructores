function Libro(nombre, autor, editorial) {
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.prestado = false;

    this.prestar = function () {
        if (this.prestado === false) {
            this.prestado = true;
            return "Préstamo realizado.";
        } else {
            return "Alerta: el libro ya está prestado.";
        }
    };

    this.devolver = function () {
        if (this.prestado === true) {
            this.prestado = false;
            return "Devolución realizada.";
        } else {
            return "Alerta: hay una inconsistencia; el libro no estaba prestado.";
        }
    };
}

const libro1 = new Libro(
    "Hábitos atómicos",
    "James Clear",
    "Planeta Colombia"
);

console.log(libro1.prestar());   
console.log(libro1.prestar());   
console.log(libro1.devolver()); 
console.log(libro1.devolver()); 
console.log(libro1.prestar());   