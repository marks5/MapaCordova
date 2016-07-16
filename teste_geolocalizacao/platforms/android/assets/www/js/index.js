document.addEventListener("deviceready", onDeviceReady , false);
var latitude = null;
var longitude = null;
var meulocal = null;
function onDeviceReady(){
      navigator.geolocation.getCurrentPosition(onSuccess, onError, getOptions());
    }
        
    var onSuccess = function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        window.alert("Latitude: " + latitude + " Longitude: " + longitude);
        meulocal = latitude + "," + longitude;
        window.alert("Meu local: " +meulocal);
        
    };

    function onError(error) {
        alert("Code: "    + error.code    + "\n" +
            "Message: " + error.message + "\n");
        
    }

    function getOptions() {
        return {
            maximumAge: 5000,
            timeout: 10000,
            enableHighAccuracy: true
        }
    }