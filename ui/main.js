

var submit = document.getElementById('submit_btn');
submit.onclick =function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
               alert('Logged in successfully');
            } else if(request.status === 403){
                alert('username/password is incorrect');
            } else if(request.status === 500){
                alert('something went wrong');
            }
        }
        
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
     console.log(password);
     request.open('POST','http://http://u15pa1a04c8.imad.hasura-app.io/login',true);
     request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
};

/*console.log('Loaded!');

var element= document.getElementById('main-text');
element.innerHTML="new value";
  var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft =marginLeft + 'px';
}
var img = document.getElementById('change');
       img.onclick = function(){
           var interval = setInterval(moveRight,50);
};*/
/*var button= document.getElementById('counter');
var counter=0;
button.onclick =function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
         request.open('GET','http://http://u15pa1a04c8.imad.hasura-app.io/counter',true);
    request.send('null');
    
    };
   
};*/