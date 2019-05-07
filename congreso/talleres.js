import Participantes from "./Participantes.js";

export default class Talleres {
  constructor(tableAgenda, tableInfo) {
    this._tableAgenda = tableAgenda;
    this._tableInfo = tableInfo;
    this._numEmployees = 0;
    this._sumAge = 0;
    this._taller = [];

    this._initTables();
  }

  _initTables() {
    let taller = JSON.parse(localStorage.getItem("taller"));
    if(!taller) {
      return;
    }
    taller.forEach( (Participante, index) => {
      console.log(Participante);
      Participante.birthday = new Date(Participante.birthday);
      this._showInTable(new Participantes(Participante));
    });
  }

  _showInTable(participante) {
    let row = this._tableAgenda.insertRow(-1);
    let cellId = row.insertCell(0);
    let cellBirthday = row.insertCell(1);
    let cellBirthday2 = row.insertCell(2);
    let cellLugares = row.insertCell(3);
    let cellDuracion = row.insertCell(4);
    let cellAge = row.insertCell(5);

    cellId.innerHTML = participante.id;
    cellBirthday.innerHTML = participante.getBirthdayAsString();
    cellBirthday2.innerHTML = participante.getBirthdayAsString2();
    cellLugares.innerHTML = participante.lugares;
    cellDuracion.innerHTML = participante.duracion;
    cellAge.innerHTML = participante.getAge();

  }
  addEmployee(participante) {
    this._showInTable(participante);
    localStorage.setItem("taller", JSON.stringify(this._taller));
    console.log(localStorage.getItem("taller"));
  }
  _showInTable(participante) {
    let row = this._tableInfo.insertRow(-1);
    let cellNombre = row.insertCell(0);
    let cellCorreo = row.insertCell(1);
    let cellBirthday3 = row.insertCell(2);
    let cellTalleres = row.insertCell(3);

    cellNombre.innerHTML = participante.nombre;
    cellCorreo.innerHTML = participante.correo;
    cellBirthday3.innerHTML = participante.getBirthdayAsString3();
    cellTalleres.innerHTML = participante.Talleres;
  }
  addEmployee2(participante) {
    this._showInTable(participante);
    localStorage.setItem("taller", JSON.stringify(this._taller));
    console.log(localStorage.getItem("taller"));
  }
  
}