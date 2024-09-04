// Data inicial
let data = {
    suelas: []
};

// Cargar datos de LocalStorage si existen
if (localStorage.getItem('appData')) {
    data = JSON.parse(localStorage.getItem('appData'));
}

// Mostrar secciones
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Mostrar sección para agregar suela
function showAddSuelaSection() {
    showSection('addSuelaSection');
}

// Mostrar sección para modificar o borrar suela
function showModifySuelaSection() {
    showSection('modifySuelaSection');
}

// Función para regresar a la pantalla principal
function returnToMain() {
    showSection('cargas'); // Volver a la sección principal de cargas
}

// Buscar Suela
function searchCarga() {
    const suelaName = document.getElementById('suelaName').value.trim();
    const resultContainer = document.getElementById('cargaResult');
    resultContainer.innerHTML = '';

    if (suelaName) {
        const suela = data.suelas.find(suela => suela.name === suelaName);
        if (suela) {
            suela.sizes.forEach(sizeEntry => {
                const p = document.createElement('p');
                p.textContent = `Talla: ${sizeEntry.size}, Carga: ${sizeEntry.carga}`;
                resultContainer.appendChild(p);
            });
        } else {
            resultContainer.textContent = 'Suela no encontrada.';
        }
    }
}

// Añadir entrada de talla y carga
function addSizeEntry() {
    const sizesContainer = document.getElementById('sizesContainer');
    const tallaInput = document.createElement('input');
    const cargaInput = document.createElement('input');

    tallaInput.setAttribute('type', 'number');
    tallaInput.setAttribute('placeholder', 'Talla');
    tallaInput.classList.add('suelaSize');

    cargaInput.setAttribute('type', 'number');
    cargaInput.setAttribute('placeholder', 'Carga');
    cargaInput.classList.add('suelaCarga');

    sizesContainer.appendChild(tallaInput);
    sizesContainer.appendChild(cargaInput);
}

// Guardar Suela
function saveSuela() {
    const suelaName = document.getElementById('newSuelaName').value.trim();
    const suelaSizes = document.querySelectorAll('.suelaSize');
    const suelaCargas = document.querySelectorAll('.suelaCarga');

    if (suelaName && suelaSizes.length > 0 && suelaCargas.length > 0) {
        const sizesArray = [];

        for (let i = 0; i < suelaSizes.length; i++) {
            const size = parseFloat(suelaSizes[i].value);
            const carga = parseFloat(suelaCargas[i].value);

            if (size && carga) {
                sizesArray.push({ size, carga });
            }
        }

        data.suelas.push({ name: suelaName, sizes: sizesArray });
        localStorage.setItem('appData', JSON.stringify(data));

        alert('Suela guardada correctamente.');
        returnToMain();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Cargar Suela para modificación
function loadSuelaForModification() {
    const modifySuelaName = document.getElementById('modifySuelaName').value.trim();
    const modifySizesContainer = document.getElementById('modifySizesContainer');
    modifySizesContainer.innerHTML = '';

    if (modifySuelaName) {
        const suela = data.suelas.find(suela => suela.name === modifySuelaName);
        if (suela) {
            suela.sizes.forEach((sizeEntry, index) => {
                const sizeInput = document.createElement('input');
                sizeInput.setAttribute('type', 'number');
                sizeInput.setAttribute('value', sizeEntry.size);
                sizeInput.classList.add('suelaSize');

                const cargaInput = document.createElement('input');
                cargaInput.setAttribute('type', 'number');
                cargaInput.setAttribute('value', sizeEntry.carga);
                cargaInput.classList.add('suelaCarga');

                modifySizesContainer.appendChild(sizeInput);
                modifySizesContainer.appendChild(cargaInput);
            });
        } else {
            alert('Suela no encontrada.');
        }
    } else {
        alert('Por favor, ingrese el nombre de la suela a modificar.');
    }
}

// Actualizar Suela
function updateSuela() {
    const modifySuelaName = document.getElementById('modifySuelaName').value.trim();
    const modifySizes = document.querySelectorAll('#modifySizesContainer .suelaSize');
    const modifyCargas = document.querySelectorAll('#modifySizesContainer .suelaCarga');

    if (modifySuelaName && modifySizes.length > 0 && modifyCargas.length > 0) {
        const sizesArray = [];

        for (let i = 0; i < modifySizes.length; i++) {
            const size = parseFloat(modifySizes[i].value);
            const carga = parseFloat(modifyCargas[i].value);

            if (size && carga) {
                sizesArray.push({ size, carga });
            }
        }

        const suelaIndex = data.suelas.findIndex(suela => suela.name === modifySuelaName);
        if (suelaIndex !== -1) {
            data.suelas[suelaIndex].sizes = sizesArray;
            localStorage.setItem('appData', JSON.stringify(data));

            alert('Suela actualizada correctamente.');
            returnToMain();
        } else {
            alert('Suela no encontrada.');
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Borrar Suela
function deleteSuela() {
    const modifySuelaName = document.getElementById('modifySuelaName').value.trim();

    if (modifySuelaName) {
        const suelaIndex = data.suelas.findIndex(suela => suela.name === modifySuelaName);
        if (suelaIndex !== -1) {
            data.suelas.splice(suelaIndex, 1);
            localStorage.setItem('appData', JSON.stringify(data));

            alert('Suela borrada correctamente.');
            returnToMain();
        } else {
            alert('Suela no encontrada.');
        }
    } else {
        alert('Por favor, ingrese el nombre de la suela a borrar.');
    }
}
