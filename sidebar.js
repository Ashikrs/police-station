init();
function init(){
    if(window.innerWidth > 768){
        document.getElementById("menu").setAttribute('disabled','');
    }
    else{
        document.getElementById("menu").removeAttribute('disabled');
    } 
}

$(window).resize(function(){
    if(window.innerWidth > 768){
        document.getElementById("menu").setAttribute('disabled','');
    }
    else{
        document.getElementById("menu").removeAttribute('disabled');
    } 
})