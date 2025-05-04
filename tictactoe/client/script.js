const url = window.location.origin
let socket = io.connect(url)
let myTurn = true;
let symbol;

const message = document.getElementById('message');
const buttons = document.querySelectorAll('.board button');

buttons.forEach(btn => btn.addEventListener('click', ()=> makeMove(btn)));
buttons.forEach(btn => btn.setAttribute('disabled',true))

function makeMove(btn){
    if(!myTurn){
        return
    }
    if(btn.innerHTML.length){
        return
    }
    socket.emit('make.move', {
        symbol: symbol,
        position: btn.id,
    })
}
socket.on('game.begin', function(data){
    symbol = data.symbol
    myTurn = symbol === "X"
    renderTurnMessage()
})

socket.on('move.made', function(data){
    document.getElementById(data.position).innerHTML = data.symbol

    myTurn = data.symbol !== symbol

    if(!isGameOver()){
        renderTurnMessage()
    } else {
        if(myTurn){
            message.innerHTML = 'You lost'
        } else{
            message.innerHTML = 'You won!'
        }
        buttons.forEach(btn => btn.setAttribute('disabled', true))
    }
})
socket.on('opponent.left', function(){
    message.innerHTML = 'Your opponent left the game.'
    buttons.forEach(btn => btn.setAttribute('disabled', true))
})
function renderTurnMessage(){
    if(!myTurn){
        message.innerHTML = 'Your opponents turn'
        buttons.forEach(btn => btn.setAttribute('disabled', true))
    } else{
        message.innerHTML = 'Your turn'
        buttons.forEach(btn => btn.removeAttribute('disabled'))
    }
}
function isGameOver(){
    let state = getBoardState()
    let matches = ['XXX','OOO'];
    let rows = [
        state.r0c0 + state.r0c1 + state.r0c2,
        state.r1c0 + state.r1c1 + state.r1c2,
        state.r2c0 + state.r2c1 + state.r2c2,
        state.r0c0 + state.r1c0 + state.r2c0,
        state.r0c1 + state.r1c1 + state.r2c1,
        state.r0c2 + state.r1c2 + state.r2c2,
        state.r0c0 + state.r1c1 + state.r2c2,
        state.r0c2 + state.r1c1 + state.r2c0,
    ]
    for(let i = 0; i < rows.length; i++){
        if(rows[i] === matches[0] || rows[i] === matches[1]){
            return true
        }
    }
    return false
}
function getBoardState(){
    let obj = {}
    
    buttons.forEach(btn => (obj[btn.id] = btn.innerHTML))
    return obj;
}

const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && chatInput.value.trim().length > 0) {
        socket.emit('chat.message', chatInput.value.trim());
        appendMessage('You', chatInput.value.trim());
        chatInput.value = '';
    }
});

socket.on('chat.message', function(msg){
    appendMessage('Opponent', msg);
});

function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.textContent = `${sender}: ${text}`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
