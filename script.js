let player1Arr = new Array();
let player2Arr = new Array();

//make board responsive
document.addEventListener("click", function(event){
    console.log("click ;)");

    function colorChange(){
        console.log(event.target.id);
        targetEl = document.getElementById(event.target.id);
        console.log(targetEl);
        if(targetEl.style.backgroundColor ==  "red" ){
            targetEl.style.backgroundColor = "white";
        }
        else{
            targetEl.style.backgroundColor = "red";
            console.log("blue");
        }
    }
    if(player1Arr.includes(event.target.id) || player2Arr.includes(event.target.id)){
        colorChange();
    }
    else{
        console.log("click a real button u dumb butt");
    }
});

//make the board
for(let i = 0; i < 2; i++){
    let table = document.createElement("table");
    table.id = "play" + i;
    document.body.appendChild(table);
    for(let r = 0; r < 8; r++){
        let row = document.createElement("tr");
        table.appendChild(row);
        for(let d = 0; d < 8; d++){
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

//-------make game rules-------

//  make a random selection for computer
let randArr1 = new Array();
for(let x = 0; x < 8; x++){
    let randID = player1Arr[Math.floor(Math.random() * player1Arr.length)]
    if(randArr1.includes(randID)){
        console.log(randID);
        x--;
    }
    else{
        randArr1[x] = randID;
        document.getElementById(randArr1[x]).style.backgroundColor = "red";
        console.log(randID)
    }
}





//some random trash
//  console.log(player1Arr[Math.floor(Math.random() * player1Arr.length)])    <-- litterly random trash ;)
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


