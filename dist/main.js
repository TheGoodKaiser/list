$(document).on("ready", start);

function start(e) {
	var $input = $('#text');
	var $button = $('#button');
	var $list = $('#list');
	var list = [];
	var counter = 0;
	$list.html = sessionStorage.getItem('$list.html');

	function change () {
		$button.html("Submit");
	}
	function empty() {
		$input.val("");	
	}
	function render(todoList) {
		return '<ul><li class = "todo">'+todoList.join('</li><li>')+'</li></ul>';
	}
	// function through(item) {
	// 	item.html("<strike>"+item.html()+"</strike>");
	// }
	function strike(e) {
		var i = e.target;
		// through(i);
		(e.target).style.textDecoration = "line-through";
	}

	function click (obj) {
		setTimeout(change, 500);
		if($input.val !== "") {
			$button.html("Done");
			list.push($input.val());
			var listHtml = render(list);
			$('#list').html(listHtml);
		}
		empty();
		sessionStorage.setItem('$list.html', $list.html);
	}
	function push (obj) {
		if (event.keyCode === 13) {
				setTimeout(change, 500);
			if($input.val !== "") {
			$button.html("Done");
			list.push($input.val());
			var listHtml = render(list);
			$('#list').html(listHtml);
			}
			empty()
			sessionStorage.setItem('$list.html', $list.html);
		}
	}
	$("#button").on('click', click);
	$("#text").keyup(push);
	$('#list').on("click", strike);
}