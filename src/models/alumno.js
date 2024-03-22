export default class Alumno {
    constructor(username, dni, edad) { // casado tiene un valor default.
    this.username = username;
    this.dni = dni;
    this.edad = edad;
    }
    toString() {
        let info = [this.username, this.dni.toString(), this.edad.toString()];
        return info;
    }
}