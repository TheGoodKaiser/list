var input = document.getElementById("text");
var button = document.getElementById("button");
var list = document.getElementById("list");
list.innerHTML = sessionStorage.getItem('list.innerHTML');

function change () {
	document.getElementById("button").innerHTML = "Submit";
}

function click (obj) {
	document.getElementById("button").innerHTML = "Done";
	console.log(obj);
	console.log(this);
	setTimeout(change, 500);
	if(input.value !== "") {
		list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
	}
	input.value="";
	sessionStorage.setItem('list.innerHTML', list.innerHTML);
}
function push (obj) {
	if (event.keyCode === 13) {
		document.getElementById("button").innerHTML = "Done";
		console.log(obj);
		console.log(this);
		setTimeout(change, 500);
		if(input.value !== "") {
			list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
		}
		input.value="";
		sessionStorage.setItem('list.innerHTML', list.innerHTML);
	}
}

button.addEventListener('click', click);
input.addEventListener('keyup', push)