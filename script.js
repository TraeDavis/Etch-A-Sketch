// get container to later insert divs/grid
const container = document.querySelector('.container');
function newPad(){
    let userInput = parseInt(prompt("How many pixels would you like in the pad?Max:100 ex: 10 = (10 X 10) 100 pixels"));
    if(!userInput){
        alert('Please enter a numer');
        newPad();
        return;
    }else if(userInput < 2 || userInput > 100){
        alert('Must be a number greater than 1 and less than 100.')
        newPad();
        return;
    }
    let pixels = userInput * userInput;
    createPad(pixels, userInput);
}

function createPad(pixels, userInput){
// use for loop to create enough divs for a user input layout 
    for(let i = 1; i <= pixels; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
    // for loop to resize each box in pad
    let forBox = document.getElementsByClassName('box');
    for(let i= 0; i < forBox.length;i++){
        forBox[i].style.width = 100/userInput + '%';
    }
    changeColor();
}

function changeColor(){
// create const to grab all boxes   
const box = document.querySelectorAll('.box');
// create eventlistener to change color of each box on mouseover
    box.forEach((item) => {
        item.addEventListener('mouseover', () => {
        item.classList.add('active');
    });
});
}
 


// create function to clear screen used onclick for clearBtn
function clearScreen(){
    const box = document.querySelectorAll('.box');
    box.forEach((item)=>{
        item.remove('box');
    });

    newPad();

}
newPad();
