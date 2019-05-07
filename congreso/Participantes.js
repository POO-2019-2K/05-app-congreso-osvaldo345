export default class Participantes {
    constructor(participante) {
      this._id = participante.id;
      this._birthday = participante.birthday;
      this._birthday2 = participante.birthday2;
      this._lugares = participante.lugares;
      this._duracion = participante.duracion;
      this._nombre = participante.nombre;
      this._correo = participante.correo;
      this._birthday3 = participante.birthday3;
      this.talleres = participante.talleres;
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

    get id() {
      return this._id;
    }
  
    get birthday() {
      return this._birthday;
    }

    get birthday2() {
      return this._birthday2;
    }

    get birthday3() {
      return this._birthday2;
    }

    get lugares() {
      return this._lugares;
    }
  
    get duracion() {
      return this._duracion;
    }
  
    get nombre() {
      return this._nombre;
    }

    get correo() {
      return this._correo;
    }

    get talleres() {
      return this._talleres;
    }


  
    getBirthdayAsString() {
      let date =
        this._birthday.getDate() +
        "/" +
        this._months[this._birthday.getMonth()] +
        "/" +
        this._birthday.getFullYear();
  
      return date;
    }

    getBirthdayAsString2() {
      let date2 =
        this._birthday2.getDate() +
        "/" +
        this._months[this._birthday2.getMonth()] +
        "/" +
        this._birthday2.getFullYear();
  
      return date2;
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
  

    getAge() {
      let oneDay = 24 * 60 * 60 * 1000;
      let oneYear = oneDay * 365;
      let differenceMs = new Date() - this._birthday;
      let age = Math.trunc(differenceMs / oneYear);
  
      return age;
    }
  }
  