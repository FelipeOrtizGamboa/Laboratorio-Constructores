function Libro(nombre, autor, editorial){
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.prestado = false ;

    this.prestar = function(){
        if(this.prestado = false){
            return `El libro se encuentra prestado`
        }else{
            return (this.prestado = true)
        };
    };

    this.devolver = function(){
        if(this.prestado = true){
            return this.prestado = false;
        }else{
            return `Hay inconsistencias`
        }
    };
}

