var input = document.getElementById("text");
var button = document.getElementById("button");
var list = document.getElementById("list");
list.innerHTML = sessionStorage.getItem('list.innerHTML');

function change () {
	document.getElementById("button").innerHTML = "Submit";
}


function click (obj) {
	console.log(obj);
	console.log(this);
	setTimeout(change, 500);
	if(input.value !== "") {
		document.getElementById("button").innerHTML = "Done";
		list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
	}
	input.value="";
	sessionStorage.setItem('list.innerHTML', list.innerHTML);
}
function push (obj) {
	if (event.keyCode === 13) {
		console.log(obj);
		console.log(this);
		setTimeout(change, 500);
		if(input.value !== "") {
			document.getElementById("button").innerHTML = "Done";
			list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
		}
		input.value="";
		sessionStorage.setItem('list.innerHTML', list.innerHTML);
	}
}

function revert() {
	document.getElementById("text").style.backgroundColor = 'white';
}

function color() {
	document.getElementById("text").style.backgroundColor = 'lightblue';
}


button.addEventListener('click', click);
input.addEventListener('keyup', push);
input.addEventListener('mouseover', color);
input.addEventListener('mouseleave', revert);