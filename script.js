const bomBtn = document.getElementById('bom')
const regularBtn = document.getElementById('regular')
const ruimBtn = document.getElementById('ruim')
const resultadoGorjeta = document.getElementById('resultadoGorjeta')
const resultadoTotal = document.getElementById('resultadoTotal')

const calcularGorjeta = (valorConta, qualidadeServico) => {
    let porcentagem = 0;
    
    switch (qualidadeServico) {
        case 'bom':
            porcentagem = 0.10;
            break;
        case 'regular':
            porcentagem = 0.05;
            break;
        case 'ruim':
            porcentagem = 0;
            break;
    }

    return valorConta * porcentagem;
};

const atualizarResultado = (valorConta, qualidadeServico) => {
    const gorjeta = calcularGorjeta(valorConta, qualidadeServico);
    const totalComGorjeta = valorConta + gorjeta;

    resultadoGorjeta.innerText = `Gorjeta: ${gorjeta.toFixed(2)}`;
    resultadoTotal.innerText = `Total com Gorjeta: ${totalComGorjeta.toFixed(2)}`;
};

bomBtn.addEventListener('click', () => {
    const valorConta = parseFloat(document.getElementById('totalConta').value);
    if (!isNaN(valorConta)) {
        atualizarResultado(valorConta, 'bom');
    } 
    else {
        alert("Por favor, insira um valor válido para a conta");
    }
});

regularBtn.addEventListener('click', () => {
    const valorConta = parseFloat(document.getElementById('totalConta').value);
    if (!isNaN(valorConta)) {
        atualizarResultado(valorConta, 'regular');
    } else {
        alert("Por favor, insira um valor válido para a conta");
    }
});

ruimBtn.addEventListener('click', () => {
    const valorConta = parseFloat(document.getElementById('totalConta').value);
    if (!isNaN(valorConta)) {
        atualizarResultado(valorConta, 'ruim');
    } else {
        alert("Por favor, insira um valor válido para a conta");
    }
});