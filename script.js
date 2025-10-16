function generateNumber() {

    const min = Math.ceil(document.getElementById('minimo').value)
    const max = Math.floor(document.getElementById('maximo').value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const sorteado = document.getElementById('resultado')
    

    sorteado.innerHTML = `O número sorteado foi: <strong>${result}</strong>`
    
    
}