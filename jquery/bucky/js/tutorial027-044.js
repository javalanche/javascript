/*********************************************************************
 *Tutorial 27 and 28-links that increase, decrease size of text in div*
 *********************************************************************/

function change_size(element, size ) {
	var current = parseInt(element.css('font-size'));
	//alert(current);
	if (size == 'smaller') {
		var new_size = current - 2;	
	} else if(size == 'bigger'){
		var new_size = current + 2;
	}
	element.css('font-size', new_size + 'px');
}
$('#smaller').click(function (e) {
	change_size($('#tutorial27'), 'smaller');
});

$('#bigger').click(function (e) {
	change_size($('#tutorial27'), 'bigger');
});



/************************************************************************************************************************************
 *  Tutorial 29 and 30 - submit button to upload document two method for doing so but don't understand difference bettwen the two   *
 ************************************************************************************************************************************/
$(document).ready( function () {
	// removeAttr method
	$('#file').change(function (e) {
		// change triggers this value added to element
		// below proves this
		value = $(this).attr('value');
		alert(value);

		$('#submit29').removeAttr('disabled');

	});
	// change attribute method
	/*
	 *$('input[type="file"]').change(function (e) {
	 *    // proves that a change in file works
	 *    //alert("Changed");
	 *    $(this).next().removeAttr('disabled');
	 *}).next().attr('disabled', 'disabled');
	 */

});



/**************************
 *  Tutorial 31 - hide()  *
 **************************/
$('#hide').click(function (e) {
	$('#message').hide();	
});



/*********************************
 *  Tutorial 32 - double click   *
 *********************************/
$('#menu_link').dblclick(function (e) {
	$('#menu').show();
});


/*****************************************************************
 *  Tutorial 33 - data binding jQuery method: keyup and keydown  *
 *****************************************************************/
// this just shows how keydown has the delay
/*
 *$('#user_text').keydown(function (e) {
 *    // proves this works
 *    //alert("Keydown");
 *    var user_text = $('#user_text').val();
 *    // proves this works
 *    //alert(user_text);
 *    
 *    $('#user_text_feedback').html(user_text);
 *});
 */

// this one does not have delay and is keyup
$('#user_text').keyup(function (e) {
	// proves this works
	//alert("Keydown");
	var user_text = $('#user_text').val();
	// proves this works
	//alert(user_text);
	
	$('#user_text_feedback').html(user_text);
});



/****************************************************
 *  Tutorial 34 - pull-down list triggers change()  *
 ****************************************************/

$('#list').change(function (e) {
	// proves the change() works
	//alert("changed");
	
	var list_value = $('#list').val();
	$('#list_feedback').html('You have selected: ' + list_value);
});




/**************************
 *  Tutorial 35 - submit  *
 **************************/
$('#signup_form').submit(function (e) {
	// proves it works
	//alert("submitted");

	var user_email = $('#user_email').val();
	$('#signup_feedback').html('Thanks, ' + user_email + " has been signed up.");
});



/*************************
 *  Tutorial 36: Toggle  *
 *************************/
$('#click_me').toggle(function (e) {
	$('#click_event').html('Yes');
}, function (e) {
	$('#click_event').html('No');
});



/************************
 *  Tutorial 37: hover  *
 ************************/

$('#menu_videos').hover(function (e) {
	$('#menu_feedback').html('Free video tutorials')
//}, function () {
});
$('#menu_code').hover(function (e) {
	$('#menu_feedback').html('Free source code')
//}, function () {
});
$('#menu_forum').hover(function (e) {
	$('#menu_feedback').html('Post you thoughts here')
//}, function () {
});



/***************************
 *  Tutorial 38: scroll()  *
 ***************************/
$('#some_text').scroll(function (e) {
	var scroll_pos = $('#some_text').scrollTop();
	$('#some_feedback').html('You have scrolled, and you are at position: ' + scroll_pos);
});




/************************************************************************************
 *  Tutorial 39: select(), lets you know if user has selected some text input:text  *
 ************************************************************************************/
$('#some_text39').select(function (e) {
	$('#some_feedback39').html('Something has been selected');
});




/************************************************************************************************************************
 *  Tutorial 40: focusin() notice the casing, important, compare also focusin with click in regards to tabs and clicks  *
 ************************************************************************************************************************/

//!!! needed to be focusin with lowercase 'i' to work!


// tab with click does not print out span only the click to box
$('#name40').click(function () {
	$('#name_span').html('Enter you full name');
});
$('#age40').click(function () {
	$('#age_span').html('Enter your age');
});
// tab with focusin prints out span
$('#name-focusin').focusin(function () {
	$('#name_span-focusin').html('Enter you full name');
});
$('#age-focusin').focusin(function () {
	$('#age_span-focusin').html('Enter your age');
});




/****************************************************************************
 *  Tutorial 41: focusout(), again notice the casing must be lowercase 'o'  *
 ****************************************************************************/

// tab with focusin prints out span
$('#name-focus').focusin(function () {
	$('#name_span-focus').html('Enter you full name');
});
$('#age-focus').focusin(function () {
	$('#age_span-focus').html('Enter your age');
});
// tab with focusout prints out span
$('#name-focus').focusout(function () {
	$('#name_span-focus').html('');
});
$('#age-focus').focusout(function () {
	$('#age_span-focus').html('');
});





/***********************************************************************************
 *  Tutorial 42: mouse* and bind, 1st time I see I can concat functions like this  *
 ***********************************************************************************/

//$('a').mouseenter(function (e) {
$('#mouse').mouseenter(function (e) {
	$(this).addClass('bold');
}).mouseleave(function (e) {
	$(this).removeClass('bold');
});

$('#bind').bind('mouseenter mouseleave', function (e) {
	$(this).toggleClass('bold');
});





/*********************************************************************************************
 *  Tutorial 43 and 44: live(), notice diff btwn input:button and input:file implementaions  *
 *********************************************************************************************/
$(function () {
	$('.duplicate').click(function (e) {
		alert('You have clicked');
		$(this).after( '<input type="button" name="click" id="click" value="Click" class="duplicate" />' );
	});
});

// this is the method for in my snippets so I image is more current and used, however....(see below)
$(function () {
	$('.live').live('click', function (e) {
		alert("You have clicked");
		// accidently put class="duplicate" and acted the same way as above
		$(this).after( '<input type="button" name="click" id="click" value="Click" class="live" />' );
	});
});

// what is interesting about this method is how can concat diff methods, see below
/*
 *$(function () {
 *    $('.live').live({
 *        click: function () {
 *            alert("You have click");
 *        }, 
 *        // oh well supposedly you can do this wouldn't work for me cause I think click overtakes it
 *        dblclick : function() {
 *            alert("You have double clicked");
 *        }
 *    });
 *});
 */

// try click various ones that pop up and see what happens
$(function () {
	$('.file43').live('change', function (e) {
		$(this).after(' <input type="file" name="file43" id="file43" class="file43"/>');
	});
});
