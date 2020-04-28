
  var interval = 10000;
      var duration = 160
      var style = "<style> #overlay{ background-color:#700a1b; position: fixed; width: 100%; height: 100%; z-index: 1000; top: 0px; left: 0px; opacity: 0.40;  filter: alpha(opacity=40); }</style>"
      document.getElementsByTagName('head')[0].innerHTML+= style;
      function hide(duration){

        var div= document.createElement("div");
          div.id = "overlay";
        
          document.body.appendChild(div);
           document.getElementsByClassName("overlay");
           setTimeout(show,duration);
           console.log("hide")
      }
      function show(){
            var element = document.getElementById("overlay");
             element.parentNode.removeChild(element);
             console.log("show");
      }
      
      function runblink(interval,duration) {
        console.log('blinkran')
      
         var ids = setInterval(function() { hide(duration);}, interval);

  }
  window.onload = runblink(interval,duration);
