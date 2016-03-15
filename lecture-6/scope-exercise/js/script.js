(function(){
	"use strict";

    var answer = 0,
        answerContainer = document.querySelector(".answer"),
        calculateBtn = document.querySelector(".calc");

    function getAnswer() {
        answerContainer.innerHTML = answer.toString();
    }

    calculateBtn.onclick = function(e) {
        answer += 42;
        getAnswer();
    };
})();