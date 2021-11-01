console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function mousePic() {
	alert("I like your style");
}

let rubDuck = document.querySelector('#duck');

rubDuck.addEventListener('mouseover', mousePic);
	

