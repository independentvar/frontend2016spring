(function(){
    "use strict";

    var button = document.querySelector(".btn"),
        box =  document.querySelector(".box");

    button.addEventListener("click", function() {
       box.classList.add("warning");
    });
}());