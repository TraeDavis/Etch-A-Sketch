// get container to later insert divs/grid
const container = document.querySelector('.container');



// use for loop to create enough divs for a user input layout 
    for(let i = 1; i <= 256; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
    
const box = document.querySelectorAll('.box');

// create eventlistener to change color of each box on mouseover
    box.forEach((item) => {
        item.addEventListener('mouseover', () => {
        item.classList.add('active');
    });

});
 


// create function to clear screen used onclick for clearBtn
function clearScreen(){
    box.forEach((item)=>{
        item.classList.remove('active');
    });
}

