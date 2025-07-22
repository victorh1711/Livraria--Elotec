const mensagem = document.getElementById('mensagem');
const text = document.getElementById('text');
const button = document.getElementById('send');
const bottle = document.getElementById('bottle')

function reset(){
    text.value = ''
    button.classList.remove('bottle')
    button.classList.add('send')
    button.disabled = true
    bottle.textContent = 'Seu feedback foi enviado!'
    button.textContent = 'V'
    mensagem.textContent = ''
}

function teste(){
    if(text.value != ''){
        mensagem.textContent = 'Aguarde...'
        mensagem.style.color = 'blue'
        setTimeout(reset, 5000)

    } else if(text.value == ''){
        mensagem.textContent = 'O campo está vazio...'
        mensagem.style.color = 'red'
    }
}