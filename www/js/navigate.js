var Navigate;

;(function(global, document, $){

    "use strict";

	Navigate = {};

	Navigate.currentPage = 1;

	Navigate.currentImage = 1;

	Navigate.nextImage = function(){

		Navigate.currentImage++;

		if(Navigate.currentImage<=10){
			return true;
		}else{
			Navigate.currentImage = 1;
			return false;
		}
	};

	Navigate.prevImage = function(){
		console.log("prev");	
	};

	Navigate.nextPage = function(){
		Navigate.currentPage++;
	};

})(window, document, jQuery);