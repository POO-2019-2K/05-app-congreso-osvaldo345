import Talleres from "./Talleres.js";
import Participantes from "./Participantes.js";
import  Registro  from "./registro.js";
import Alumnos from "./alumnos.js";

class Main {
  constructor() {
    let talleres = new Talleres(
      document.querySelector("#agenda"),
      document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");

      if (form.checkValidity() === true) {
        let id = document.querySelector("#id").value;
        let sBirthday = document.querySelector("#birthday").value;
        sBirthday = sBirthday.split("-");

        let birthday = new Date(sBirthday[0], sBirthday[1] - 1, sBirthday[2]);

        let sBirthday2 = document.querySelector("#birthday2").value;
        sBirthday2 = sBirthday2.split("-");

        let birthday2 = new Date(sBirthday2[0], sBirthday2[1] - 1, sBirthday2[2]);


        let lugares = document.querySelector("#lugares").value;
        let duracion = document.querySelector("#duracion").value;

        let objParticipante = {
          id: id,
          birthday: birthday,
          birthday2: birthday2,
          lugares: lugares,
          duracion: duracion
        }

        let participante = new Participantes(objParticipante);
        talleres.addEmployee(participante);

      }

      console.log(form.checkValidity());
    });
  }
}

let m = new Main();

class Main2 {
constructor() {
  let alumnos = new Alumnos(
    document.querySelector("#agenda"),
    document.querySelector("#info")
  );
  document.querySelector("#btnAdd2").addEventListener("click", () => {
  let form2 = document.querySelector("#form2");
  form2.classList.add("was-validated");

  if (form2.checkValidity() === true) {
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
  
    let sBirthday3 = document.querySelector("#birthday3").value;
    sBirthday3 = sBirthday3.split("-");

    let birthday3 = new Date(sBirthday3[0], sBirthday3[1] - 1, sBirthday3[2]);


    let tall = document.querySelector("#tall").value;
    

    let objRegistro = {
      nombre: nombre,
      correo: correo,
      birthday3: birthday3,
      tall: tall,
    }

    let registro = new Registro(objRegistro);
    alumnos.addEmployee2(registro);

  }

  console.log(form2.checkValidity());
  });
}
}
let m2 = new Main2();