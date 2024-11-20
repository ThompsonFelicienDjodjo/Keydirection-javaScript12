const pressed = [];
const secretCode = 'coucou';

window.addEventListener('keyup', (e) =>{
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice( -secretCode.length - 1, pressed.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('Ding Ding');
        cornify_add();
    }
    console.log(pressed);
})