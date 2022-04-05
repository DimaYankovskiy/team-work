var menu = document.getElementById('mobile-menu');
var content = document.getElementById('content');
var close = document.getElementById('close');

menu.onclick = function(){
    content.style.width = '100%';
}

close.onclick = function(){
    content.style.width = '0px';
}

