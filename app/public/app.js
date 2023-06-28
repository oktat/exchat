var socket = io()

const inputForm = document.querySelector('#inputForm')
const input = document.querySelector('#input')
const messages = document.querySelector('#messages')

inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if(input.value) {
        socket.emit('chat message', input.value)
        input.value = ''
    }
})

socket.on('chat message', msg => {
    li = document.createElement('li')
    li.textContent = msg
    messages.appendChild(li)
    window.scrollTo(0, document.body.scrollHeight)
})
