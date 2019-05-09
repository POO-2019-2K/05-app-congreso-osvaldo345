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
    //localStorage.removeItem("taller2");
    let taller2 = JSON.parse(localStorage.getItem("taller2"));
    if(!taller2) {
    return;
    }
    taller2.forEach( (registro, index) => {
    console.log(registro);
    registro.birthday3 = new Date(registro.birthday3);
    this._showInTable2(new Registro(registro));
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

    let objRegistro = {
        nombre: registro.nombre,
        correo: registro.correo,
        birthday3: registro.birthday3,
        tall: registro.tall,
    }
        this._taller2.push(objRegistro);
}




_findCorreo(correo){
    let found = -1

    this._taller2.forEach((registro, index)=>{
        if(registro.correo === correo){
            found = index;
            return;
        }
    });
    return found;
}



addEmployee2(registro) {
    let found = this._findCorreo(registro.correo);
    if (found >= 0){
        swal.fire({
            type: "error",
            tittle: "error",
            text: "esta persona ya esta registrada"
        });
        return;
    }
    this._showInTable2(registro);
    localStorage.setItem("taller2", JSON.stringify(this._taller2));
    console.log(localStorage.getItem("taller2"));
}
}

