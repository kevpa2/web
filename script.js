const rutina = {
    1: { nombreDia: "Lunes - Pecho y tríceps", ejercicios: [
        { nombre: "Press de banca plano", descripcion: "4 series de 10-12 repeticiones", explicacion: "Acuéstate boca arriba, baja la barra hasta el pecho y empuja hacia arriba." },
        { nombre: "Fondos en banca", descripcion: "3 series de 12-15 repeticiones", explicacion: "Coloca las manos en una banca detrás de ti y baja el cuerpo flexionando los codos." },
        { nombre: "Press cerrado para tríceps", descripcion: "3 series de 10-12 repeticiones", explicacion: "Con las manos juntas en la barra, baja y sube controladamente." },
        { nombre: "Plancha frontal con peso", descripcion: "3 series de 30-45 segundos", explicacion: "Mantén la posición de plancha con peso adicional sobre la espalda." }
    ]},
    2: { nombreDia: "Martes - Espalda y bíceps", ejercicios: [
        { nombre: "Remo con barra", descripcion: "4 series de 10-12 repeticiones", explicacion: "Mantén la espalda recta mientras jalas la barra hacia tu abdomen." },
        { nombre: "Remo con mancuernas", descripcion: "3 series de 12-15 repeticiones", explicacion: "Flexiona ligeramente las rodillas y lleva las mancuernas hacia la cadera." },
        { nombre: "Curl de bíceps alternado", descripcion: "3 series de 12-15 repeticiones", explicacion: "Alterna las repeticiones entre ambos brazos, manteniendo la forma." },
        { nombre: "Elevación de piernas acostado", descripcion: "3 series de 15-20 repeticiones", explicacion: "Acostado boca arriba, eleva las piernas sin tocar el suelo al bajarlas." }
    ]},
    3: { nombreDia: "Miércoles - Resistencia (HIIT)", ejercicios: [
        { nombre: "Burpees", descripcion: "4 rondas de 12 repeticiones", explicacion: "Desde posición de pie, salta, baja a una flexión y vuelve a saltar." },
        { nombre: "Peso muerto con barra", descripcion: "4 rondas de 10 repeticiones", explicacion: "Mantén la espalda recta mientras levantas la barra desde el suelo." },
        { nombre: "Plancha con toques de hombro", descripcion: "4 rondas de 20 segundos", explicacion: "En posición de plancha, toca tus hombros alternativamente." },
        { nombre: "Zancadas con mancuernas", descripcion: "4 rondas de 12 repeticiones por pierna", explicacion: "Da un paso adelante con cada pierna, bajando la cadera." },
        { nombre: "Escaladores", descripcion: "4 rondas de 30 segundos", explicacion: "En posición de plancha alta, lleva las rodillas al pecho alternadamente." }
    ]},
    4: { nombreDia: "Jueves - Piernas", ejercicios: [
        { nombre: "Sentadilla con barra", descripcion: "4 series de 10-12 repeticiones", explicacion: "Coloca la barra en los hombros, baja en cuclillas y sube." },
        { nombre: "Zancadas estáticas con mancuernas", descripcion: "3 series de 12 por pierna", explicacion: "Mantén una pierna al frente, baja la cadera y sube." },
        { nombre: "Peso muerto rumano", descripcion: "3 series de 10-12 repeticiones", explicacion: "Mantén las piernas ligeramente flexionadas y baja la barra." },
        { nombre: "Elevaciones de talones", descripcion: "4 series de 15-20 repeticiones", explicacion: "Eleva los talones mientras mantienes la barra sobre los hombros." }
    ]},
    5: { nombreDia: "Viernes - Hombros y abdomen", ejercicios: [
        { nombre: "Press militar con barra", descripcion: "4 series de 10-12 repeticiones", explicacion: "Empuja la barra hacia arriba desde la altura de los hombros." },
        { nombre: "Elevaciones laterales con mancuernas", descripcion: "3 series de 12-15 repeticiones", explicacion: "Levanta las mancuernas a los lados hasta la altura de los hombros." },
        { nombre: "Encogimientos de hombros con barra", descripcion: "3 series de 15-20 repeticiones", explicacion: "Eleva los hombros hacia las orejas con la barra." },
        { nombre: "Crunch con peso", descripcion: "3 series de 15 repeticiones", explicacion: "Realiza crunches sosteniendo una pesa sobre el pecho." },
        { nombre: "Toques al talón (oblicuos)", descripcion: "3 series de 15-20 repeticiones", explicacion: "Toca el talón derecho e izquierdo alternadamente mientras estás acostado." }
    ]}
};

// Función para cargar y mostrar la rutina del día seleccionado
function cargarRutinaDia(dia) {
    const diaRutina = rutina[dia];
    document.getElementById("titulo-dia").innerText = diaRutina.nombreDia;
    const contenedor = document.getElementById("rutina-dia");
    contenedor.innerHTML = "";
    diaRutina.ejercicios.forEach(ej => {
        contenedor.innerHTML += `
            <div class="ejercicio">
                <label>
                    <input type="checkbox">
                    <strong>${ej.nombre}</strong>: ${ej.descripcion}
                </label>
                <p>${ej.explicacion}</p>
            </div>`;
    });
    mostrarSeccion('rutina');
}

// Mostrar una sección específica
function mostrarSeccion(id) {
    document.querySelectorAll(".seccion").forEach(seccion => {
        seccion.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}

// Mostrar frase motivacional
const frasesMotivacionales = [
    "El dolor que sientes hoy será la fuerza que sentirás mañana.",
    "No te detengas cuando duela, detente cuando termines.",
    "Cada día cuenta. ¡Hazlo valer!",
    "Entrena duro, vive fuerte.",
    "El éxito no ocurre por accidente."
];
document.getElementById("frase").innerText = frasesMotivacionales[Math.floor(Math.random() * frasesMotivacionales.length)];

