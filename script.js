let player1Arr = new Array();
let player2Arr = new Array();

//make board responsive
document.addEventListener("click", function(event){
    console.log("click");
    console.log(event.target.id);
    test = document.getElementById(event.target.id);
    console.log(test);
    if(test.style.backgroundColor ==  "red" ){
        test.style.backgroundColor = "white";
    }
    else{
        test.style.backgroundColor = "red";
        console.log("blue");
    }
});

//make the board
for(let i = 0; i < 2; i++){
    let table = document.createElement("table");
    table.id = "play" + i;
    document.body.appendChild(table);
    for(let r = 0; r < 3; r++){
        let row = document.createElement("tr");
        table.appendChild(row);
        for(let d = 0; d < 3; d++){
            //make the el
            let data = document.createElement("td");
            data.id = i + ''  + r + '' + d;
            data.className = "el";

            //append to html
            data.appendChild(document.createTextNode("row"));
            row.appendChild(data);

            //add new ids to arr
            if(i == 0){
                player1Arr.push(data.id);
            }
            else if(i == 1){
                player2Arr.push(data.id);
            }
        }
    }
}


//some rando trashh:
// const { table } = require("console");

// console.log(row.id, table);
// td = get.createElement

// table = document.getElementById("tab");

// row = document.createElement("tr");
// row.id = "0";
// table.appendChild(row);

// row = document.createElement("tr");
// row.id = "0";
// table.appendChild(row);


