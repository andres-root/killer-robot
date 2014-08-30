var canvas = null;
var context = null;
var frameRate = 1000/30;
var frame 	= 0;
var assets = ['static/img/robowalk00.png',
              'static/img/robowalk01.png',
              'static/img/robowalk02.png',
              'static/img/robowalk03.png',
              'static/img/robowalk04.png',
              'static/img/robowalk05.png',
              'static/img/robowalk06.png',
              'static/img/robowalk07.png',
              'static/img/robowalk08.png',
              'static/img/robowalk09.png',
              'static/img/robowalk10.png',
              'static/img/robowalk11.png',
              'static/img/robowalk12.png',
              'static/img/robowalk13.png',
              'static/img/robowalk14.png',
              'static/img/robowalk15.png',
              'static/img/robowalk16.png',
              'static/img/robowalk17.png',
              'static/img/robowalk18.png'
             ];
var frames = [];  

var onImageLoad = function(){  
    console.log("IMAGE!!!");  
};  

var setup = function() {  
    canvas = document.getElementById('container');  
    context = canvas.getContext('2d');  
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;  

    for(var i = 0; i < assets.length; i++){  
        frames.push(new Image());
        frames[i].onload = onImageLoad;  
        frames[i].src = assets[i];  
    }  

    setInterval(animate, frameRate)
};  



var animate = function(){  

    context.clearRect(0,0,canvas.width, canvas.height);
	context.drawImage(frames[frame], 192, 192);
	frame = (frame + 1) % frames.length;

};  
setup();  