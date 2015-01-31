$(document).ready(function(){
   // Site.events.position();

 
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '894651250568986',
          xfbml      : true,
          version    : 'v2.1'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         //js.src="//connect.facebook.net/en_US/sdk/debug.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
        
      Site.events.http($("#canvas ul"));
  
 
    
})


// window.onload
window.onload = function () {

  
    console.log("everything is loaded")
    Site.events.Flogin();
  
     
      
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
    
    http: function (el, callback){
         $.ajax({
              url: "https://appember-yvens47.c9.io/Videos.php",
              type: "GET",
              dataType: "json",
              success: function(e){
                  data = (e);
                  $.each(data, function(key, value){
                      console.log(value['vidID'])
                    el.append("<li>"+value['youtube_videoID']+"</li>");
                  })
                 
              }
         })
    }
    ,
    Flogin: function(){
          FB.getLoginStatus(function(Resp) {
            if(Resp.authResponse) {
                // We're logged in and ready to go!
                //testapi()
                console.log(Resp)
                FB.api('/me', function(response) {
                   console.log(JSON.stringify(response));
                   var fdata =  JSON.stringify(response);
                   alert(response.name)
                   $(".user"). append(" "+response.name);
                });
               
            } 
            else if(Resp.status =='not_authorized'){
                
                console.log(FB);
                FB.login();
                
            }
            else {
                // We're not connected
              console.log(stsResp)
            }
});
    }
   
    
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
      
 