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

  _cancelEdit(row, participante) {
    row.cells[0].innerHTML = participante.id;
    row.cells[1].innerHTML = participante.getBirthdayAsString();
    row.cells[2].innerHTML = participante.getBirthdayAsString2();
    row.cells[3].innerHTML = participante.lugares;
    row.cells[4].innerHTML = participante.duracion;
    this._addEditDeleteToRow(row, participante);
  }

  _saveEdit(row, participante, newParticipante){
    let pos = this._findId(participante.id);
    this._taller[pos] = newParticipante;
    localStorage.setItem('taller', JSON.stringify(this._taller));
    this._cancelEdit(row, new Participante(newParticipante));
  }

  _editRow(row, participante) {
    let iName = document.createElement('input');
    iName.type = 'text';
    iName.value = participante.id;

    let iEmail = document.createElement('input');
    iEmail.type = 'email';
    iEmail.value = participante.getBirthdayAsString();

    let iDate = document.createElement('input');
    iDate.type = 'date';
    iDate.value = participante.getBirthdayAsString2();

    let iLugares = document.createElement('input');
    iLugares.type = 'text';
    iLugares.value = participante.lugares;

    let iDuracion = document.createElement('input');
    iDuracion.type = 'text';
    iDuracion.value = participante.duracion;

    let btnSave = document.createElement('input');
    btnSave.type = 'button';
    btnSave.value = 'Grabar';
    btnSave.className = "btn btn-success";
    btnSave.addEventListener('click', () => {
      let newParticipante = {
        id: iName.value,
        birthday: iEmail.value,
        birthday2: iDate.value,
        lugares: iLugares.value,
        duracion: iDuracion.value
      };

      this._saveEdit(row, participante, newParticipante);
    });

    let btnCancel = document.createElement('input');
    btnCancel.type = 'button';
    btnCancel.value = 'Cancelar';
    btnCancel.className = "btn btn-danger";
    btnCancel.addEventListener('click', () => {
      this._cancelEdit(row, participante);
    });

    row.cells[0].innerHTML = '';
    row.cells[0].appendChild(iName);
    row.cells[1].innerHTML = '';
    row.cells[1].appendChild(iEmail);
    row.cells[2].innerHTML = '';
    row.cells[2].appendChild(iDate);
    row.cells[3].innerHTML = '';
    row.cells[3].appendChild(iLugares);
    row.cells[4].innerHTML = '';
    row.cells[4].appendChild(iDuracion);
    row.cells[5].innerHTML = '';
    row.cells[5].appendChild(btnSave);
    row.cells[6].innerHTML = '';
    row.cells[6].appendChild(btnCancel);
  }

  _addEditDeleteToRow(row, participante) {
    let btnEdit = document.createElement("input");
    btnEdit.type = "button";
    btnEdit.value = 'Editar';
    btnEdit.className = 'btn btn-success';
    btnEdit.addEventListener('click', () => {
      this._editRow(row, participante);
    });

    let btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.value = 'Eliminar';
    btnDelete.className = 'btn btn-danger';

    row.cells[5].innerHTML = '';
    row.cells[5].appendChild(btnEdit);
    row.cells[6].innerHTML = '';
    row.cells[6].appendChild(btnDelete);
  }

  _showInTable(participante) {
    let row = this._tableAgenda.insertRow(-1);
    let cellId = row.insertCell(0);
    let cellBirthday = row.insertCell(1);
    let cellBirthday2 = row.insertCell(2);
    let cellLugares = row.insertCell(3);
    let cellDuracion = row.insertCell(4);
    row.insertCell(5);
    row.insertCell(6);
    row.insertCell(7);

    cellId.innerHTML = participante.id;
    cellBirthday.innerHTML = participante.getBirthdayAsString();
    cellBirthday2.innerHTML = participante.getBirthdayAsString2();
    cellLugares.innerHTML = participante.lugares;
    cellDuracion.innerHTML = participante.duracion;

    this._addEditDeleteToRow(row, participante);

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
