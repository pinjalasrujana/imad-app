console.log('Loaded!');

var element= document.getElementById('main-text');
element.innerHTML="new value";
  var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft =marginLeft + 'px';
}
var img = document.getElementById('change');
       img.onclick = function(){
           var interval = setInterval(moveRight,50);
};