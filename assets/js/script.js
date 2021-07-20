/*Crear la estructura de datos mediante arreglos y objetos*/
let radiologyArray = [{
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA"
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE"
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE"
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA"
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA"
  }
];

let traumatologyArray = [{
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA"
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE"
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE"
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE"
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA"
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE"
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE"
  }
];

let dentalArray = [{
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE"
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE"
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA"
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA"
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA"
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE"
  }
];

/*Mapeo de los arreglos*/
const map = [{
    title: 'Radiología',
    array: radiologyArray
  },
  {
    title: 'Traumatología',
    array: traumatologyArray
  },
  {
    title: 'Dental',
    array: dentalArray
  }
];
/**********************/

/* Mostrar por pantalla la primera y última atención de cada listado Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.*/
for (let i = 0; i < 3; i++) {
  let nodoH2 = document.createElement('h2');
  let nodoP = document.createElement('p');
  nodoH2.innerHTML = map[i].title;
  nodoP.innerHTML = `Primera atención: ${map[i].array[0].paciente} - ${map[i].array[0].prevision} | Última atención: ${map[i].array[map[i].array.length-1].paciente} - ${map[i].array[map[i].array.length-1].prevision}`;
  document.body.appendChild(nodoH2);
  document.body.appendChild(nodoP);
}

/*Recorrer el arreglo y mostrar su contenido en una tabla.*/
let createTable = (title, array) => {
  let text = `<br><h2>Tabla ${title}</h2><table><tr>`;
  for (x in array[0])
    text += `<th>${x}</th>`;
  text += '</tr>';
  for (let i = 0; i < array.length; i++) {
    text += '<tr>'
    for (x in array[i])
      text += `<td>${array[i][x]}</td>`;
    text += '</tr>';
  }
  text += '</table>';
  return text;
}

for (let i = 0; i < 3; i++) {
  let nodoDiv = document.createElement('div');
  nodoDiv.innerHTML = createTable(map[i].title, map[i].array);
  document.body.appendChild(nodoDiv);
}