window.onload = function(){
 var canvas = document.getElementById("myCanvas");
 var context = canvas.getContext("2d");
 var imageObj = new Image();
 imageObj.onload = function(){
     context.drawImage(imageObj, 10, 10);
     context.font = "20px Calibri";
     context.fillText(window.location.search, 50, 200);
 };
 imageObj.src = "http://www.codeproject.com/KB/Wearables/831012/internet-of-things-800x535.jpg"; 
};