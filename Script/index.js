const buttonForMeta = document.getElementById('forMeta')
const buttonForConfig = document.getElementById('forConfig')
const popUp = document.getElementById('popUp')
const sendButton = document.getElementById('sendText')
const backButton = document.getElementById('backButton')
const textArea = document.getElementById('textArea')
const mensagem = document.getElementById('mensagem')

buttonForMeta.addEventListener("click", function(){
    window.location.href = 'meta.html'
})
  buttonForConfig.addEventListener("click", function(){
    popUp.style.display = 'block'
})
backButton.addEventListener("click", function(){
    popUp.style.display = 'none'
    textArea.value = ''
})
sendButton.addEventListener("click", function(){
    if(textArea.value.trim() == ''){
        mensagem.style.color = 'red'
        mensagem.textContent = 'O campo está vazio'
        setTimeout(() => {
            mensagem.textContent = ''
        }, 2000);
    }
    else if(textArea.value.trim() != ''){
        mensagem.style.color = 'blue' 
        mensagem.textContent = 'Agradecemos seu feedback'
        textArea.style.display = 'none'
        sendButton.disabled = true
    }
})