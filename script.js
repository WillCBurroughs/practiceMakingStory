let timer;
let secondsEllapsed; 

// Used to clear and to test 
localStorage.clear();

// Clearing secondsEllapsed once starting project again 
clearSecondsEllapsed();

// currentTime will only have a value after stopping timer 
let currentTime; 

// Will display all the scores you have so far 
let scoresSoFar; 

// Something to store tableValue with
let storeTable = document.getElementById("scoreTable");

// Store Num to hold it 
let holdNumPlace = document.getElementById("holdNum");

// Check if there is already a value stored to iterate, if so don't set to 0 
if(localStorage.getItem("timePassed") === null){
    secondsEllapsed = 0; 
} else {
    // Convert back to Int
    secondsEllapsed = parseInt(localStorage.getItem("timePassed"));
}

// Check if the array already has values and if not setting it equal to empty array
// If values adding values to array
if(localStorage.getItem("itemsSaved") === null){
    scoresSoFar = []; 
} else {
    // Needed to convert back to array
    scoresSoFar = JSON.parse(localStorage.getItem("itemsSaved"));
}

// Make table at start of call
makeTable();

holdNumPlace.innerHTML = secondsEllapsed;

    function timePassed(){
        if(!timer){
        
        // iterates secondsEllapsed and 
        timer = setInterval(() => {
             
             holdNumPlace.innerHTML = secondsEllapsed; 
             secondsEllapsed++; 
             localStorage.setItem("timePassed", secondsEllapsed);
        }, 1000)
    }}

    function stopTimer(){
        if(timer){
            clearInterval(timer);
            timer = null;
            currentTime = secondsEllapsed; 
        }
    }

    function clearSecondsEllapsed(){
        localStorage.removeItem("timePassed");
        secondsEllapsed = 0;
    }

     function saveScore(){

        // Checking if currentTime has a value 
        if(currentTime != null){
        
        // Add and save seconds so far in array
        scoresSoFar.push(currentTime);
        localStorage.setItem("itemsSaved", JSON.stringify(scoresSoFar));
        }
        makeTable()
        // Clear total seconds Ellapsed 
        clearSecondsEllapsed(); 
        holdNumPlace.innerHTML = 0;
        console.log(scoresSoFar);
     }

     function makeTable(){

        // Setting value to empty then adding vals back
        let holdTBody = document.getElementById("storeVals");
        holdTBody.innerHTML = ""; 

        // Checking vals aren't empty
        if(scoresSoFar){
            for(let score of scoresSoFar){

                // Creating new elements
                let newTableRow = document.createElement("tr");
                let newTableData = document.createElement("td");

                // Add value to table data 
                newTableData.textContent = score;

                // Adding vals to table 
                newTableRow.appendChild(newTableData);
                holdTBody.appendChild(newTableRow);
                
            }
        }

     }