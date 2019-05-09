export default class Registro {
    constructor(registro) {
    this._nombre = registro.nombre;
    this._correo = registro.correo;
    this._birthday3 = registro.birthday3;
    this._tall = registro.tall;
    this._months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
    ];
    }

    get birthday3() {
        return this._birthday3;
    }

    get nombre() {
        return this._nombre;
    }

    get correo() {
        return this._correo;
    }

    get tall() {
        return this._tall;
    }

    getBirthdayAsString3() {
        let date3 =
        this._birthday3.getDate() +
        "/" +
        this._months[this._birthday3.getMonth()] +
        "/" +
        this._birthday3.getFullYear();
    
        return date3;
    }
}