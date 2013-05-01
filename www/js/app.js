var App;

;(function(global, document, $, nav, cli){

    "use strict";

    App = {};

    // Application Constructor
    App.initialize = function() {
        this.bindEvents();
    };


    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    App.bindEvents = function() {
        // Phonegap device ready.
        document.addEventListener('deviceready', this.onDeviceReady, false);

        $(document).bind( "pageload", this.onPageLoad);

        $(Client).bind( "newImagesLoaded", this.renderImages);

        /* // Phonegap volume Down
        document.addEventListener("volumedownbutton", nav.nextImage, false);

        // Phonegap volume Up
        document.addEventListener("volumeupbutton", nav.prevImage, false);*/

    };


    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    App.onDeviceReady = function() {
        $.mobile.phonegapNavigationEnabled = true;

    };


    App.onPageLoad = function( e, data ) {
        var u = $.mobile.path.parseUrl( data.url );
        if ( u.search != "" ) { // tiene el parametro page
            var p = u.search.replace("?page=","");
            cli.getPage(parseInt(p));
        }

    };

    App.renderImages = function( e, data ) {
        $('#next-page-btn').show();

        $.tmpl( $("#image-template"), data ).appendTo( "#image-container" );

    };

    App.nextPage = function() {
        if(nav.nextImage()){
            $('#images img, #images h2').addClass("images-hidden");
            $("#img-"+nav.currentImage).removeClass("images-hidden");
            $("#p-"+nav.currentImage).removeClass("images-hidden");
        }else{
            $( "#image-container" ).html("");
            $('#next-page-btn').hide();
            nav.nextPage();
            cli.getPage(nav.currentPage);
        }

    };

    App.closeApp = function(){
        navigator.app.exitApp();
    };



})(window, document, jQuery, Navigate, Client);
