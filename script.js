console.log("yo")
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
})
