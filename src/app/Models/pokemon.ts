export class Pokemon {
    /* Representación de un objeto existente */
    /* Atributos */
    ataque: number;
    tipo: string;
    nombre: string;
    id: number;
    defensa: number;
    vida: number;
    imagen: string;

    /* Constructor */
    constructor(imagen_recibido:string,ataque_recibido: number, tipo_recibido: string, nombre_recibido: string, id_recibido: number, defensa_recibido: number, vida_recibido: number) {
        this.id = id_recibido;
        this.nombre = nombre_recibido;
        this.ataque = ataque_recibido;
        this.defensa = defensa_recibido;
        this.vida = vida_recibido;
        this.tipo = tipo_recibido;
        this.imagen=imagen_recibido;
    }

    /* Métodos */
    atacar() {
        console.log("Estoy atacando xd");
    }

    defender() {
        console.log("Estoy defendiendo");
    }

    quitarVida(cantidad_quitar: number) {
        this.vida -= cantidad_quitar;
    }

    agregarVida(cantidad_agregar: number) {
        this.vida += cantidad_agregar;
    }

    getId(): number {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getVida(): number {
        return this.vida;
    }

    getImagen(): string {
        return this.imagen;
    }

    getAtaque(): number {
        return this.ataque
    }

    getDefensa(): number {
        return this.defensa
    }

    getTipo(): string {
        return this.tipo
    }

    //Setters

    setId(id: number): void {
        this.id = id;
    }

    setVida(vida: number): void {
        this.vida = vida;
    }

    setAtaque(ataque: number): void {
        this.ataque = ataque;
    }

    setDefensa(defensa: number): void {
        this.defensa = defensa;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    //Metodos de clases:

    mostrarPokemon(){
        return "ID: " + this.id
    }

}
