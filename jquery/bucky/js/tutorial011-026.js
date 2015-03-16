var countEverything = $("*").length;
var countId = $("#area").find("*").length;
alert("all elements count: " + countEverything);
alert("id elements count: " + countId);

var name = $("#name").val();
alert(name);
//notice how this one needs text() and not val()
var text = $("#text").text();
alert(text);

$('#click-me').click(function(){
	alert("Alo");
});

$('p:first').text("Booo");

// notice these selectors are my type and not id
$(":button").click(function(){
	alert("I wonder what the third button will do, is it a button??");
});

$(":submit").click(function(){
	alert("hehehe I'm a submit");
	$(this).attr('value', "I tricked you!, now do you see all submit doing the same?");
});

/***********************************************************************************
 *  tutorial 16 - change color when selected to yellow and back to white when not  *
 ***********************************************************************************/

$(':text').focusin(function (e) {
	$(this).css('background-color', 'yellow');
});
$(':text').blur(function (e) {
	$(this).css('background-color', '#fff');
});

// notice the ":" can also be used with tag name itself not just id
// this also allows the textareas, buttons, anything with text to be included
// try commenting out below and see what above code on its own
$(':input').focusin(function (e) {
	$(this).css('background-color', 'yellow');
});
$(':input').blur(function (e) {
	$(this).css('background-color', '#fff');
});


/***************************************************************
 *  tutorial 18 - background color to black and text to white  *
 ***************************************************************/

$(':button').click(function(){
	$(this).css('background-color', 'black').css('color', 'red');
});


/**************************************
 *  tutorial 18 - multiple selectors  *
 **************************************/
// reference using ids
//$('#button, #paragraph').click(function(){

// reference using type
$('input:button, p').click(function(){
	alert('Something was pressed/clicked');
});


/*********************************
 *  tutorial 19 - this selector  *
 *********************************/
$('#button19').click(function(){
	//$('#button19').attr('value', 'Please wait...');
	$(this).attr('value', 'Please wait...');
});


/**************************************
 *  tutorial 20 - even/odd selectors  *
 **************************************/
$(document).ready(function(){
	$('.table tr:even').addClass('highlight');
});

$(document).ready(function(){
	$('#area20 p:odd').addClass('highlight');
});


/***********************************************************************************************************
 *  tutorial 21-22 - Name and Email entries, default disappears and reappears when select and de-selected  *
 ***********************************************************************************************************/
$(document).ready(function(){
	var email_default = "Enter you email address...";

	$('input[type="email"]').attr("value", email_default)
	.focus(function(){
		if ( $(this).val() == email_default) {
			$(this).attr('value', '');
		}
	})
	.blur(function(){
		if ( $(this).val() == '') {
			$(this).attr('value', email_default);
		}
	});
});


/*****************************************************************************************************
 *  tutorial 23 and 24 - contains selector, fake case sensitive search in list w/ highlight results  *
 *****************************************************************************************************/
$(document).
	ready( function () {
	$('#search_name').keyup( function () {
		search_name = $(this).val();
		// any time there is a keyup will remove previous results
		$('#names23 li').removeClass('highlight');
		// the if ignores whitespace
		if (jQuery.trim(search_name) !='') {
			$("#names23 li:contains('"+ search_name + "')").
				addClass('highlight');
		}
	})
})




// This is duplicated code above in tutortial 16 and don't need but was in video 26
//$(':text ').focusIn(function (e) {
	//$(this).css('background-color', 'yellow');
//});
$(':button').click(function (e) {
	$(this).attr('value', "Please wait...");
	$(this).attr('disabled', true);
});
