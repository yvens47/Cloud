$(document).ready(function(){
    Site.events.position();

 
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '612412602139631',
          xfbml      : true,
          version    : 'v2.1'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
        // js.src = "//connect.facebook.net/en_US/sdk.js";
         js.src="//connect.facebook.net/en_US/sdk/debug.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
        
    
      
 
    
})


// window.onload
window.onload = function () {

    console.log("everything is loaded")
    console.log(FB)
}

var Site = Site || {}

Site.events = {
    clickListener: function(el, type, callback){
        
    },
    prompt: function(msg){
        alert(msg);
    },
    
    position: function(){
        navigator.geolocation.getCurrentPosition(function(location, error){
            console.log(location)
           var  lat = location.coords.latitude;
            var long = location.coords.longitude;
            
            useLocation(lat, long)
        })
    },
    
    
}





































function error(e){
    console.log(e);
}


function useLocation(lat, long){
      
         
      google.maps.event.addDomListener(window, 'load', initialize(lat, long));
    
}

function initialize(la, lo) {
    console.log(la)
        var mapOptions = {
          center: { lat: la, lng: lo},
          zoom: 18
        };
        var map = new google.maps.Map(document.getElementById('canvas'),
            mapOptions);
            
     var marker = new google.maps.Marker({   map: map,   position: map.getCenter() });
    
}
      
 