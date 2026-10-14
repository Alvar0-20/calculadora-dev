// Variáveis base do teu treino
const MyNumber = 10;
const MyNumber2 = 10;

const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function sum(value = MyNumber, value2 = MyNumber2) { return value + value2; }
function sub(value = MyNumber, value2 = MyNumber2) { return value - value2; }
function mult(value = MyNumber, value2 = MyNumber2) { return value * value2; }
function div(value = MyNumber, value2 = MyNumber2) {
    if (value2 === 0) return 'Erro';
    return value / value2;
}

// Raiz Quadrada
function calculateSquareRoot() {
    try {
        let result = eval(display.value);
        display.value = Math.sqrt(result);
    } catch (error) {
        display.value = 'Erro';
    }
}

// Elevar ao Quadrado (x²)
function calculateSquare() {
    try {
        let result = eval(display.value);
        display.value = Math.pow(result, 2);
    } catch (error) {
        display.value = 'Erro';
    }
}

// Seno
function calculateSin() {
    try {
        let result = eval(display.value);
        display.value = Math.sin(result * Math.PI / 180);
    } catch (error) {
        display.value = 'Erro';
    }
}

// Cosseno
function calculateCos() {
    try {
        let result = eval(display.value);
        display.value = Math.cos(result * Math.PI / 180);
    } catch (error) {
        display.value = 'Erro';
    }
}

// Tangente
function calculateTan() {
    try {
        let result = eval(display.value);
        display.value = Math.tan(result * Math.PI / 180);
    } catch (error) {
        display.value = 'Erro';
    }
}

// Inserir PI
function insertPi() {
    display.value += Math.PI;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

// --- SUPORTE AO TECLADO DO PC ---
window.addEventListener('keydown', (event) => {
    const key = event.key;

    if (/^[0-9+\-*/.]$/.test(key)) {
        appendToDisplay(key);
    } 
    else if (key === 'Enter' || key === '=') {
        calculate();
    } 
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } 
    else if (key === 'Escape') {
        clearDisplay();
    }
});

// Função para alternar entre modo básico e científico
function toggleScientificMode() {
    const scientificKeys = document.getElementById('scientific-keys');
    const toggleBtn = document.getElementById('toggle-mode');
    
    scientificKeys.classList.toggle('hidden');
    
    if (scientificKeys.classList.contains('hidden')) {
        toggleBtn.textContent = "Científico";
    } else {
        toggleBtn.textContent = "Básico";
    }
}
// Apaga o último caractere do visor
function deleteLast() {
    display.value = display.value.slice(0, -1);
}