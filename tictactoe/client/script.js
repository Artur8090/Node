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