(function(){
    "use strict";

    var button = document.querySelector(".btn"),
        box =  document.querySelector(".box"),
        question = document.querySelector(".question");

    button.addEventListener("click", function(e)
    {
        e.preventDefault();
        box.classList.add("warning");
        box.innerHTML = button.innerHTML;
    });
}());