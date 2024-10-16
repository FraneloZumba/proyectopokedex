export class Pokemon {
    /* Representación de un objeto existente */
    /* Atributos */
    ataque: number;
    tipo: string;
    nombre: string;
    id: number;
    defensa: number;
    vida: number;

    /* Metodos */

    costructor(ataque_recibido: number, tipo_recibido: string, nombre_recibido: string, id_recibido: number, defensa_recibido: number, vida_recibido: number) {
        this.id = id_recibido;
        this.nombre = nombre_recibido;
        this.ataque = ataque_recibido;
        this.defensa = defensa_recibido;
        this.vida = vida_recibido;
        this.tipo = tipo_recibido;
    }

    atacar() {
        console.log("Estoy atacando xd");
    }
    defender() {
        console.log("Estoy defendiendo");
    }
    quitarvida(cantidad_quitar: number) {
        this.vida = this.vida - cantidad_quitar;
    }
    agregarvida(cantidad_agregar: number) {
        this.vida = this.vida + cantidad_agregar;
    }

    __str(){
        console.log(object);
    }
}
