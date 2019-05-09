import Registro from "./registro.js";

export default class Alumnos {
constructor(tableAgenda, tableInfo) {
    this._tableAgenda = tableAgenda;
    this._tableInfo = tableInfo;
    this._numEmployees = 0;
    this._sumAge = 0;
    this._taller2 = [];

    this._initTables2();
}

_initTables2() {
    let taller2 = JSON.parse(localStorage.getItem("taller2"));
    if(!taller2) {
    return;
    }
    taller.forEach( (registro, index) => {
    console.log(registro);
    registro.birthday3 = new Date(registro.birthday3);
    this._showInTable(new Registro(registro));
    });
}

_showInTable2(registro) {
    let row = this._tableInfo.insertRow(-1);
    let cellNombre = row.insertCell(0);
    let cellCorreo = row.insertCell(1);
    let cellBirthday3 = row.insertCell(2);
    let cellTall = row.insertCell(3);

    cellNombre.innerHTML = registro.nombre;
    cellCorreo.innerHTML = registro.correo;
    cellBirthday3.innerHTML = registro.getBirthdayAsString3();
    cellTall.innerHTML = registro.tall;
}
addEmployee2(registro) {
    this._showInTable2(registro);
    localStorage.setItem("taller2", JSON.stringify(this._taller2));
    console.log(localStorage.getItem("taller2"));
}

}