/*************************
 *  Tutorial 92: inArray()  *
 *************************/
$(function () {
	var names = ['Alex', 'Billy', 'Dale'];

	
	/*
	 *if ( jQuery.inArray('Alex', names) !='-1') {
	 *    alert('Found Alex');
	 *}
	 *if ( jQuery.inArray('Billy', names) !='-1') {
	 *    alert('Found Billy');
	 *}
	 *if ( jQuery.inArray('Dale', names) !='-1') {
	 *    alert('Found Dale');
	 *}
	 */

	$('#check_92').click(function (e) {
		var name = $('#name_92').val();
		//alert(name);
		
		if ( jQuery.inArray(name, names) !='-1') {
			alert( name + ' is in the array');
		} else{
			alert( name + ' is NOT in the array');
		}
	});
});



/*************************
 *  Tutorial 93: each()  *
 *************************/
 $(function () {
 	function display_array() {
 		$('#names_93').text('');

		$.each(names, function (index, value) {
			this.innerHTML = this + " is the element, " + index + " is the position";

			$('#names_93').append(value + ' <br />');
		});
 	}

	var names = ['Alex', 'Billy', 'Dale'];
	display_array();

	$('#insert_93').click(function (e) {
		var name = $('#name_93').val();
		names.push(name);
		display_array();
	});
 });


/************************
 *  Tutorial 94: now()  *
 ************************/
$(function () {
	setInterval(function() {
		var timestamp = jQuery.now();
		$('#time_94').text(timestamp);
	}, 1);
});



/***********************************
 *  Tutorial 95: Days until event  *
 ***********************************/
$(function () {
	eventTime = Date.parse(' 2015-03-16') / 1000;
	// both jQuery and $ work below, might always be interchangable
	//currentTime = Math.floor(jQuery.now() / 1000);
	currentTime = Math.floor($.now() / 1000);
	//alert(eventTime);
	
	var seconds = eventTime - currentTime;
	//alert(seconds);
	var days = Math.floor(seconds / (60 * 60 * 24));
	//alert(days);
	$('#days_95').text('Only ' + days + ' days until the event');
});


/****************************
 *  Tutorial 96: Load file  *
 ****************************/
$('#load_96').click(function (e) {
	//alert("i've been clicked");
	// this has to be run on a server!!!
	// also notice the reference point of file is to index.html, not to this .js file
	//$('#content_96').load('./tutorial96.html');
	$("#content_96").load("html/tutorial96.html", function(responseTxt, statusTxt, xhr){
		if(statusTxt == "success")
			alert("External content loaded successfully!");
		if(statusTxt == "error")
			alert("Error: " + xhr.status + ": " + xhr.statusText);
	});
});


/**************************************
 *  Tutorial 97-98: GET HTTP Request  *
 **************************************/
$('#button_97').click(function (e) {
	var string = $('#string_97').val();
	//alert(string);
	
	$.get('php/reverse.php',
		{input: string}, 
		function (data, textStatus, jqXHR) {
		//function (data) {
			$('#feedback_98').text(data);
		}
	);
});


/********************************************************
 *  Tutorial 99-100: POST and other callback functions  *
 ********************************************************/
$('#button_99').click(function (e) {
	var name = $('#name_99').val();
	var string = $('#string_99').val();

	$.post('php/tutorial99.php',
		{ string: string, name: name },
		function (data, textStatus, jqXHR) {
			$('#feedback_99').html(data);
			
			// notice this give the exact text of the html elements
			//$('#feedback_99').text(data);
		}
	).error(function(){
		$('#messages_100').append("An error has occurred");
	}).complete(function() {
		$('#messages_100').append("Request complete");
	}).success(function(){
		$('#messages_100').append("Request success");
	});
});


/*****************************
 *  Tutorial 101: Ajax Load  *
 *****************************/
$('#load_101').click(function (e) {
	$.ajax({
		url: 'html/page.html',
		//type: 'POST',
		dataType: 'html',
		data: $.param( $('Element or Expression') ),
		complete: function (jqXHR, textStatus) {
			// callback
		},
		success: function (data, textStatus, jqXHR) {
			$('#content_101').html(data);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			// error callback
		}
	});
});



/***********************************************
 *  Tutorial 118-120: Creating a basic plugin  *
 ***********************************************/
(function($){
	$.fn.targetBlank = function (e){
		var targetArray = ['_blank', '_self', '_parent', '_top'];
		var target = jQuery.trim( $(this).attr('target'));

		if ((target == undefined) || 
			(target =='') || 
			(false == jQuery.inArray(target, targetArray))
		) {
			$(this).attr('target', '_blank');
		}
	}
})(jQuery);

$(function () {
	$('.link_118').targetBlank();
});



/***********************************************
 *  Tutorial 121-122: Highlight search plugin  *
 ***********************************************/
$(function () {
	$('#submit_122').click(function (e) {
		var search_term = $('#term_122').val();
		$('#paragraph_122').unhighlight().highlight(search_term);
	});
});
