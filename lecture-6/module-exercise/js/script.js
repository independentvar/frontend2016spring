(function(){
	"use strict";

	var modal = (function(){
        var openButtons = document.getElementsByClassName("modal-btn-open"),
            closeButtons = document.getElementsByClassName("modal-btn-close"),
            cover = document.querySelector(".cover"),
            modals = document.getElementsByClassName("modal"),
            currentModal = null,
            hiddenClassName = "hidden";

        var init = function(){
            console.log("Up and running");

            for(var i = 0; i < openButtons.length; i++){
                openButtons[i].addEventListener("click", openModal);
            }

            for(var i = 0; i < closeButtons.length; i++) {
                closeButtons[i].addEventListener("click", closeModal);
            }
        };

        var openModal = function(e){
            e.preventDefault();
            var hash = e.currentTarget.hash;
            var id = hash.slice(1);
            currentModal = document.getElementById(id);

            currentModal.classList.remove(hiddenClassName);
            cover.classList.remove(hiddenClassName);
        };

        var closeModal = function () {
            currentModal.classList.add(hiddenClassName);
            cover.classList.add(hiddenClassName);
        };

        return {
            init: init
        }
      
    })();
  
    modal.init();

})();