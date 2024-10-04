function addNumber(num) {
    const pinInput = document.getElementById('pin');
    if (pinInput.value.length < 4) {
        pinInput.value += num;
    }
}

function clearInput() {
    document.getElementById('pin').value = '';
}

function login() {
    const pin = document.getElementById('pin').value;
    // Aquí deberías validar el PIN; para este ejemplo, simplemente lo consideramos válido
    if (pin.length === 4) {
        localStorage.setItem('balance', 100); // saldo inicial
        location.href = 'dashboard.html';
    } else {
        alert('Por favor, ingresa un PIN válido de 4 cifras.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('userSelect')) {
        // Almacena el nombre del usuario seleccionado
        document.getElementById('userSelect').addEventListener('change', function() {
            localStorage.setItem('user', this.value);
        });
    }
});
