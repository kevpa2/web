const rutinaPorDia = {
    1: [ // Lunes
        { nombre: "Press de banca plano con barra", repeticiones: "4x10-12", descripcion: "Acuéstate en el banco, baja la barra al pecho y empuja hacia arriba." },
        { nombre: "Fondos en banca (peso corporal)", repeticiones: "3x12-15", descripcion: "Coloca las manos en una banca detrás de ti y baja el cuerpo." },
        { nombre: "Press cerrado con barra para tríceps", repeticiones: "3x10-12", descripcion: "Sujeta la barra con agarre estrecho y baja hacia el pecho." },
        { nombre: "Plancha frontal con peso", repeticiones: "3x30-45 segundos", descripcion: "Mantén el cuerpo recto apoyado en codos y puntas de los pies." }
    ],
    2: [ // Martes
        { nombre: "Remo con barra", repeticiones: "4x10-12", descripcion: "Inclínate hacia adelante y levanta la barra hacia el abdomen." },
        { nombre: "Remo con mancuernas", repeticiones: "3x12-15", descripcion: "Con una mancuerna, levántala hacia tu cadera en cada mano." },
        { nombre: "Curl de bíceps alternado", repeticiones: "3x12-15", descripcion: "Sujeta las mancuernas y dobla los codos para levantar las pesas." },
        { nombre: "Elevación de piernas acostado", repeticiones: "3x15-20", descripcion: "Acuéstate boca arriba y levanta las piernas sin tocar el suelo." }
    ],
    3: [ // Miércoles
        { nombre: "Burpees", repeticiones: "4x12", descripcion: "Realiza una flexión seguida de un salto vertical." },
        { nombre: "Peso muerto con barra", repeticiones: "4x10", descripcion: "Levanta la barra desde el suelo con la espalda recta." },
        { nombre: "Plancha con toques de hombro", repeticiones: "4x20 segundos", descripcion: "Mantén la posición de plancha y toca cada hombro." },
        { nombre: "Zancadas con mancuernas", repeticiones: "4x12 por pierna", descripcion: "Da un paso adelante y baja la rodilla trasera hacia el suelo." },
        { nombre: "Escaladores", repeticiones: "4x30 segundos", descripcion: "Desde posición de plancha, lleva las rodillas al pecho alternadamente." }
    ],
    4: [ // Jueves
        { nombre: "Sentadilla con barra", repeticiones: "4x10-12", descripcion: "Baja la cadera manteniendo la barra en los hombros." },
        { nombre: "Zancadas estáticas con mancuernas", repeticiones: "3x12 por pierna", descripcion: "Baja la rodilla trasera en una posición de estocada." },
        { nombre: "Peso muerto rumano", repeticiones: "3x10-12", descripcion: "Baja la barra manteniendo las piernas casi rectas." },
        { nombre: "Elevaciones de talones", repeticiones: "4x15-20", descripcion: "Levanta los talones para trabajar las pantorrillas." }
    ],
    5: [ // Viernes
        { nombre: "Press militar con barra", repeticiones: "4x10-12", descripcion: "Levanta la barra desde los hombros hasta estirar los brazos." },
        { nombre: "Elevaciones laterales", repeticiones: "3x12-15", descripcion: "Levanta las mancuernas hacia los lados hasta la altura de los hombros." },
        { nombre: "Encogimientos de hombros", repeticiones: "3x15-20", descripcion: "Eleva los hombros lo más alto posible mientras sostienes las pesas." },
        { nombre: "Crunch con peso", repeticiones: "3x15", descripcion: "Realiza abdominales con un peso sobre el pecho." },
        { nombre: "Toques al talón (oblicuos)", repeticiones: "3x20", descripcion: "Toca cada talón alternadamente desde posición de abdominales." }
    ]
};

const frasesMotivacionales = [
    "¡No te detengas! Cada día estás más cerca de tu meta.",
    "El dolor de hoy será la fuerza de mañana.",
    "Los campeones siguen jugando hasta que lo hacen bien.",
    "Cada esfuerzo cuenta. ¡Sigue adelante!"
];

function mostrarDia(dia) {
    const rutina = rutinaPorDia[dia];
    const rutinaContainer = document.getElementById('rutina');
    rutinaContainer.innerHTML = '';

    rutina.forEach(ejercicio => {
        const div = document.createElement('div');
        div.className = 'ejercicio';
        div.innerHTML = `
            <input type="checkbox">
            <strong>${ejercicio.nombre} - ${ejercicio.repeticiones}</strong>
            <p>${ejercicio.descripcion}</p>
        `;
        rutinaContainer.appendChild(div);
    });
    
    document.getElementById('titulo-dia').innerText
function mostrarDia(dia) {
    const rutina = rutinaPorDia[dia];
    const rutinaContainer = document.getElementById('rutina');
    rutinaContainer.innerHTML = '';

    rutina.forEach(ejercicio => {
        const div = document.createElement('div');
        div.className = 'ejercicio';
        div.innerHTML = `
            <input type="checkbox">
            <strong>${ejercicio.nombre} - ${ejercicio.repeticiones}</strong>
            <p>${ejercicio.descripcion}</p>
        `;
        rutinaContainer.appendChild(div);
    });

    document.getElementById('titulo-dia').innerText = getDiaTexto(dia);
    document.getElementById('frase-motivacional').innerText = frasesMotivacionales[Math.floor(Math.random() * frasesMotivacionales.length)];
}

function getDiaTexto(dia) {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    return dias[dia - 1];
}


