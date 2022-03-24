let button = document.querySelector('.button');
let btn = document.querySelector('.btn');
let body = document.getElementsByTagName('body');

button.addEventListener('click', firstFunction);
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        document.body.style.backgroundColor = "rgb(255, 228, 255)";
        btn.setAttribute('hidden', 'hidden');
        button.removeAttribute('hidden');
        btn.removeAttribute('disabled');
	}
});

function firstFunction(){
    button.setAttribute('hidden', 'hidden');
    btn.removeAttribute('hidden');
    document.body.style.backgroundColor = "grey";
}


