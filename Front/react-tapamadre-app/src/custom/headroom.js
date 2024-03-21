import Headroom from "headroom.js";
var myElement = document.querySelectorAll(".navbar-sticky");
myElement.forEach(function(e){
    var headroom  = new Headroom(e);
    headroom.init();
})