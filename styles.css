// Inicialización de los datos en localStorage si no existen
if (!localStorage.getItem('appData')) {
    const initialData = {
        suelas: [],
        ownerName: 'Usuario'
    };
    localStorage.setItem('appData', JSON.stringify(initialData));
}

const data = JSON.parse(localStorage.getItem('appData'));

// Mostrar secciones
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Mostrar sección para agregar suela
function showAddSuelaSection() {
    document.getElementById('addSuelaSection').classList.remove('hidden');
    document.getElementById('modifySuelaSection').classList.add('hidden');
}

// Mostrar sección para modificar o borrar suela
function showModifySuelaSection() {
    document.getElementById('modifySuelaSection').classList.remove('hidden');
    document.getElementById('addSuelaSection').classList.add('hidden');
}

// Añadir talla y carga
function addSizeEntry() {
    const sizeInput = document.querySelector('#sizesContainer .suelaSize');
    const cargaInput = document.querySelector('#sizesContainer .suelaCarga');
    const suelaName = document.getElementById('newSuelaName').value;

    if (!suelaName) {
        alert('Por favor, ingrese el nombre de la suela antes de añadir tallas y cargas.');
        return;
    }

    if (sizeInput && cargaInput) {
        const size = parseFloat(sizeInput.value);
        const carga = parseFloat(cargaInput.value);

        if (!isNaN(size) && !isNaN(carga)) {
            // Guardar en la base de datos
            let suela = data.suelas.find(suela => suela.name === suelaName);
            if (!suela) {
                suela = { name: suelaName, sizes: [] };
                data.suelas.push(suela);
            }
            suela.sizes.push({ size, carga });

            localStorage.setItem('appData', JSON.stringify(data));

            // Limpiar los campos de entrada
            sizeInput.value = '';
            cargaInput.value = '';
            sizeInput.focus();
        } else {
            alert('Ingrese una talla y carga válidos.');
        }
    } else {
        alert('Ingrese una talla y carga.');
    }
}

// Guardar suela
function saveSuela() {
    const suelaName = document.getElementById('newSuelaName').value;
    if (suelaName) {
        const existingSuelaIndex = data.suelas.findIndex(suela => suela.name === suelaName);
        if (existingSuelaIndex !== -1) {
            // Actualizar suela existente
            const suelaSizes = data.suelas[existingSuelaIndex].sizes;
            if (suelaSizes.length > 0) {
                data.suelas[existingSuelaIndex].sizes = suelaSizes;
            }
        }
        // Vaciar campos y mostrar mensaje
        document.getElementById('sizesContainer').innerHTML = `
            <div class="size-entry">
                <input type="number" class="suelaSize" placeholder="Talla">
                <input type="number" class="suelaCarga" placeholder="Carga">
            </div>`;
        document.getElementById('newSuelaName').value = '';
        alert('Suela guardada exitosamente.');
    } else {
        alert('Ingrese un nombre de suela.');
    }
}

// Buscar carga de suela
function searchCarga() {
    const suelaName = document.getElementById('suelaName').value;
    const result = data.suelas.find(suela => suela.name === suelaName);
    const cargaResult = document.getElementById('cargaResult');
    if (result) {
        cargaResult.innerHTML = '';
        result.sizes.forEach(size => {
            cargaResult.innerHTML += `Talla: ${size.size}, Carga: ${size.carga}<br>`;
        });
    } else {
        cargaResult.innerHTML = 'Suela no encontrada.';
    }
}

// Modificar suela
function modifySuela() {
    const suelaName = document.getElementById('modifySuelaName').value;
    const suela = data.suelas.find(suela => suela.name === suelaName);
    if (suela) {
        document.getElementById('newSuelaName').value = suela.name;
        const sizesContainer = document.getElementById('sizesContainer');
        sizesContainer.innerHTML = '';
        suela.sizes.forEach(size => {
            sizesContainer.innerHTML += `
                <div class="size-entry">
                    <input type="number" class="suelaSize" value="${size.size}" placeholder="Talla">
                    <input type="number" class="suelaCarga" value="${size.carga}" placeholder="Carga">
                </div>`;
        });
        showAddSuelaSection();
    } else {
        alert('Suela no encontrada.');
    }
}

// Borrar suela
function deleteSuela() {
    const suelaName = document.getElementById('modifySuelaName').value;
    const index = data.suelas.findIndex(suela => suela.name === suelaName);
    if (index !== -1) {
        data.suelas.splice(index, 1);
        localStorage.setItem('appData', JSON.stringify(data));
        alert('Suela eliminada.');
    } else {
        alert('Suela no encontrada.');
    }
}