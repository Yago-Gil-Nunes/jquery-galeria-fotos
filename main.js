$(document).ready(function(){
    /*
    console.log(document.querySelector("header button"));
    console.log($("#botao-cancelar"))

    document.querySelector("header button").addEventListener("click", function(e){

    })
*/ 
    $("header button").click(function () {
       $("form").slideDown();
    })

    $("form").on("submit",function(e) {
        console.log("submit");
        e.preventDefault();
    });
});

