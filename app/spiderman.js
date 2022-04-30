class spiderman { 
    constructor(nombre, edad, actor, peliculas, estudio){
        this.nombre = nombre;
        this.edad = edad;
        this.actor = actor;
        this.peliculas = peliculas;
        this.estudio = estudio;
    }

    get getInfo(){
        return `Hey, I'm ${this.actor} from ${this.estudio}`
    }
}

module.exports = spiderman;