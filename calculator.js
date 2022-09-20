const buttons = document.querySelectorAll('button')

let screen = document.querySelector('input')

let screenValue = '';


for (let btns of buttons) {
    btns.addEventListener('click', (e) => {
        buttonText = e.target.innerText
        console.log(` you pressed ${buttonText}`)


        if (buttonText == "X") {
            buttonText = " * "
            screenValue += buttonText;
            screen.value = screenValue;


        }
        else if( buttonText == 'C'){
            screenValue = ''
            screen.value = screenValue;
        }
        else if( buttonText == '=' ){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue
        }


    })

}


const makeRandColor = () =>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}
const h1 = document.querySelector('h1')
const buttons2 = document.querySelectorAll('button')
for (let color of buttons2) {
    color.addEventListener('click', ()=>{
        h1.style.color = makeRandColor();
    })
}



