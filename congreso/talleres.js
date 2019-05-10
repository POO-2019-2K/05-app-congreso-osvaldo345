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
    //localStorage.removeItem("taller");
    let taller = JSON.parse(localStorage.getItem("taller"));
    if(!taller) {
      return;
    }
    taller.forEach( (Participante, index) => {
      console.log(Participante);
      Participante.birthday = new Date(Participante.birthday);
      Participante.birthday2 = new Date(Participante.birthday2);
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

    cellId.innerHTML = participante.id;
    cellBirthday.innerHTML = participante.getBirthdayAsString();
    cellBirthday2.innerHTML = participante.getBirthdayAsString2();
    cellLugares.innerHTML = participante.lugares;
    cellDuracion.innerHTML = participante.duracion;

    let objParticipante = {
      id: participante.id,
      birthday: participante.birthday,
      birthday2: participante.birthday2,
      lugares: participante.lugares,
      duracion: participante.duracion
    }
    this._taller.push(objParticipante);
  }
    
    
    _findId(id){
      let found = -1
  
      this._taller.forEach((participante, index)=>{
          if(participante.id === id){
              found = index;
              return;
          }
      });
      return found;
  }
  
  
  
  addEmployee(participante) {
      let found = this._findId(participante.id);
      if (found >= 0){
          swal.fire({
              type: "error",
              tittle: "error",
              text: "este taller ya esta registrado"
          });
          return;
      }
      this._showInTable(participante);
      localStorage.setItem("taller", JSON.stringify(this._taller));
      console.log(localStorage.getItem("taller"));
  }
  }
