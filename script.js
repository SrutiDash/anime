document.getElementById("team").onmouseover = function(){mouseOver()};
document.getElementById("team").onmouseout = function(){mouseOut()};
function mouseOver(){
    document.getElementById("team").style.color="white";
}
function mouseOut(){
    document.getElementById("team").style.color= "yellow";
} 
document.getElementById("img1").onmouseover = function(){mouseOver()};
document.getElementById("img1").onmouseout = function(){mouseOut()};
function mouseOver(){
    document.getElementById("img1").style.width="20rem";
    document.getElementById("img1").style.Height = "40rem";
}
function mouseOut(){
    document.getElementById("img1").style.width = "40rem";
    document.getElementById("img1").style.Height = "70rem";
} 
