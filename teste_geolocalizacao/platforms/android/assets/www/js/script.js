// Menu hamburguer

function slidetoggle() {
      var slider = document.getElementById("content-menu");
      document.getElementById("shadow").className += " is-active";
      if(slider.style.left == "0px") {
        slider.style.left = "-500px";
        
      }
      else {
        slider.style.left = "0px";
      }
    }
function slideclose() {
      var slider = document.getElementById("content-menu");
      document.getElementById("shadow").className = "shadow";
      slider.style.left = "-300px";
    }

document.addEventListener("deviceready", onDeviceReady , false);
var latitude = null;
var longitude = null;
var meulocal = null;
function onDeviceReady(){

      $.mobile.loading("show");
      navigator.geolocation.getCurrentPosition(onSuccess, onError, getOptions());
    }
        
    var onSuccess = function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        window.alert("Latitude: " + latitude + " Longitude: " + longitude);
        meulocal = latitude + "," + longitude;
        window.alert("Meu local: " +meulocal);
        $.mobile.loading("hide");
    };

    function onError(error) {
        alert("Code: "    + error.code    + "\n" +
            "Message: " + error.message + "\n");
        $.mobile.loading("hide");
    }

    function getOptions() {
        return {
            maximumAge: 5000,
            timeout: 10000,
            enableHighAccuracy: true
        }
    }

