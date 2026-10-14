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

    // Se for número ou operador válido, adiciona ao visor
    if (/^[0-9+\-*/.]$/.test(key)) {
        appendToDisplay(key);
    } 
    // Se apertar Enter ou '=', calcula o resultado
    else if (key === 'Enter' || key === '=') {
        calculate();
    } 
    // Se apertar Backspace, apaga o último caractere
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } 
    // Se apertar Escape (Esc), limpa tudo
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

// Função para injetar funções matemáticas no visor
function appendFunction(func) {
    display.value += func;
}