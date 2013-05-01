var Client;

;(function(global, document, $, nav){

    "use strict";

	Client = {};

	Client.currentUrl = {};

	Client.currentOptions = {};

	Client.getPage = function( p ){
		nav.currentPage = parseInt(p);

		Client.getImagesFromSW();

	};

	Client.getImagesFromSW = function(){
		var offset = nav.currentPage +"0",
			q = "select image, image_height, image_width, title from swdata LIMIT 10 OFFSET " + offset,
			repo = "9gagcom_-_hot_content",
			url = "https://api.scraperwiki.com/api/1.0/datastore/sqlite?format=jsondict&name="+repo+"&query="+q+"&callback=?";

			$.getJSON( url )
			.done(function(d) { 
				Client.getImagesFromSWCallback(d);
			})
			.fail(function(e) { console.log( e ); })
			.always(function() {  });
	};

	Client.getImagesFromSWCallback = function(data){
		$(this).trigger('newImagesLoaded', [Client.prepareData(data)]);
	};

	Client.prepareData = function(data){
		$.each(data,function(i,e){
			data[i]["id"] = i+1;
			data[i]["custom_class"] = "images-hidden";
			if(i==0)
				data[i]["custom_class"] = "";
		});
		return data;
	};

})(window, document, jQuery, Navigate);