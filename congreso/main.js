import Talleres from "./Talleres.js";
import Participantes from "./Participantes.js";

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
        };

        let participante = new Participantes(objParticipante);
        talleres.addEmployee(participante);

      }

      console.log(form.checkValidity());



    });
  }
}

let m = new Main();