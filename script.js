function validarFormulario(tipo) {
    const prefix = tipo === 'gasolina' ? 'gas' : 'die';
    let valido = true;

    document.querySelectorAll(`#form${tipo.charAt(0).toUpperCase() + tipo.slice(1)} input`).forEach(input => {
        if (!input.value) {
            input.classList.add('error'); // Agrega una clase de error para resaltar el campo
            valido = false;
        } else {
            input.classList.remove('error'); // Remueve la clase de error si el campo está lleno
        }
    });

    if (!valido) {
        alert('Por favor, complete todos los campos.');
    }
    return valido;
}

function guardarAnalisis(tipo) {
    if (validarFormulario(tipo)) {
        // Lógica para guardar el análisis
    }
}
function validarFormulario(tipo) {
    const prefix = tipo === 'gasolina' ? 'gas' : 'die';
    const form = document.querySelector(`#form${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`);
    let valido = true;
    let primerError = null;

    // Limpiar errores previos
    form.querySelectorAll('.error-message').forEach(e => e.remove());
    
    form.querySelectorAll('input').forEach(input => {
        input.classList.remove('error');
        const value = input.value.trim();
        let error = '';
        
        if (!value) {
            error = 'Este campo es requerido';
        } else if (input.type === 'number') {
            const numValue = parseFloat(value);
            if (isNaN(numValue)) {
                error = 'Debe ser un número válido';
            } else if (input.hasAttribute('min') && numValue < parseFloat(input.getAttribute('min'))) {
                error = `Mínimo permitido: ${input.getAttribute('min')}`;
            } else if (input.hasAttribute('max') && numValue > parseFloat(input.getAttribute('max'))) {
                error = `Máximo permitido: ${input.getAttribute('max')}`;
            }
        }

        if (error) {
            if (!primerError) primerError = input;
            input.classList.add('error');
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = error;
            errorElement.style.color = '#FF4A57';
            errorElement.style.fontSize = '0.9rem';
            errorElement.style.marginTop = '0.25rem';
            input.after(errorElement);
            valido = false;
        }
    });

    if (!valido && primerError) {
        primerError.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    return valido;
}

function guardarAnalisis(tipo) {
    if (!validarFormulario(tipo)) return;

    const prefix = tipo === 'gasolina' ? 'gas' : 'die';
    const formData = {};
    
    document.querySelectorAll(`#form${tipo.charAt(0).toUpperCase() + tipo.slice(1)} input`).forEach(input => {
        const key = input.id.replace(prefix, '');
        formData[key] = input.type === 'number' ? parseFloat(input.value) : input.value;
    });

    // Resto de la lógica para guardar y generar curva
    generarCurva(tipo, formData);
    mostrarConfirmacion('Análisis guardado correctamente');
}
function validarFormulario(tipo) {
    const prefix = tipo === 'gasolina' ? 'gas' : 'die';
    let valido = true;

    document.querySelectorAll(`#form${tipo.charAt(0).toUpperCase() + tipo.slice(1)} input`).forEach(input => {
        if (!input.value) {
            input.classList.add('error'); // Agrega una clase de error para resaltar el campo
            valido = false;
        } else {
            input.classList.remove('error'); // Remueve la clase de error si el campo está lleno
        }
    });

    if (!valido) {
        alert('Por favor, complete todos los campos.');
    }
    return valido;
}

function guardarAnalisis(tipo) {
    if (validarFormulario(tipo)) {
        // Lógica para guardar el análisis
    }
}