test = document.getElementById("test")

function actionFuncColor(){
    if(test.style.backgroundColor ==  "red" ){
        test.style.backgroundColor = "white";
    }
    else{
        test.style.backgroundColor = "red";
        console.log("blue");
    }
}

test.onclick = actionFunc
