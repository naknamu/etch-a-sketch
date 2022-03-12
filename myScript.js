const container = document.querySelector('#container');
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

//number of squares per side
let squareNumber = 16; //default;

function createSquareGrid() {
    //loop to create a 16x16 square grid
    for (let i=0; i<squareNumber; i++)
    {
        const content = document.createElement('div');
        content.classList.add("content");
        // content.style.border = "1px solid blue";
        container.appendChild(content);

        for (let j=0; j<squareNumber; j++)
        {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add("square");
            squareDiv.style.width = "20px"
            squareDiv.style.height = "20px";
            squareDiv.style.backgroundColor = 'green';
            // squareDiv.style.border = "1px solid black";
            squareDiv.style.margin = "1px";

            squareDiv.addEventListener('mouseover', function() {
                squareDiv.style.backgroundColor = "blue";
            });

            //add squares to the container
            content.appendChild(squareDiv);
        }
    }
}

//create the grid
createSquareGrid();

//function to delete the grid
function deleteSquareGrid(){
    const squareAllDelete = document.querySelectorAll('.square');
    for (let i=0; i<squareAllDelete.length; i++)
    {
        squareAllDelete[i].remove();
    }
}

//create button container
const buttonDiv = document.querySelector('#button');
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'center';
buttonDiv.style.padding = '16px';

//create a button that will clear the current grid
const button = document.createElement('BUTTON');
button.style.padding = "8px 16px";
button.innerText = "Clear";

button.addEventListener('click', function()
{
    const squareAll = document.querySelectorAll('.square');
    for (let i=0; i<squareAll.length; i++)
    {
        squareAll[i].style.backgroundColor = "green";
    }

    let newSquareNumber = parseInt(prompt("Enter number of squares per side (max. 100): ", 16));
    //change the new value of square with a maximum of 100
    if (newSquareNumber >= 100)
    {
        squareNumber = 100;
    } else {
        squareNumber = newSquareNumber;
    }

    //delete previous grid
    deleteSquareGrid();

    //create new grid
    createSquareGrid();
});

//add button to the div
buttonDiv.appendChild(button);

