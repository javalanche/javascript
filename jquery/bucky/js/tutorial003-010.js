$('#paragraph').click(
	function () {
		$('#paragraph').hide();
	}
);

$(document).ready(function(){
	$('#message').fadeIn('slow');
});

// this loads before anything is ready
$(document).ready(function(){
	alert("This comes up before anything with:\n$(document).ready");
});

// this loads after picture is ready
$('#image').load(function(){
	alert("Picture is loaded with:\n$('#image').load");
});

// this loads after iframe is ready
$('#iframe').load(function(){
	alert("iframe with id=iframe has loaded:\n$('#iframe').load");
});

// this loads after all iframes are ready
$('iframe').load(function(){
	alert("at least one iframe has been loaded:\n$('iframe').load");
});

// this waits till everthing is loaded in view
$(window).load(function(){
	alert("Loaded everything\n$(window).load");
});

// this happens whenever leaving the page
$(window).unload(function(){
	alert("You're leaveing this page")
});
