(function(){
	"use strict";

	var modal = (function(){
        var buttonOpen = document.querySelector(".modal-btn-open"),
            buttonClose = document.querySelector(".modal-btn-close"),
            cover = document.querySelector(".cover"),
            modal = document.querySelector(".modal"),
            hiddenClassName = "hidden";

        buttonOpen.addEventListener("click", function(e){
            e.preventDefault();

            modal.classList.remove(hiddenClassName);
            cover.classList.remove(hiddenClassName);
        });

        buttonClose.addEventListener("click", function(){
            modal.classList.add(hiddenClassName);
            cover.classList.add(hiddenClassName);
        });

        /*
        function getModalName(classList){
            for(var i = 0; classList.length; i++){
                if()
            }
        }
        */

        var init = function(){
            console.log("Up and running");
        }

        return {
            init: init
        }
      
    })();
  
    modal.init();

})();