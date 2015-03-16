/**********************
 *  Tutorial 45-46:   *
 *Character Counting Remaining on Textarea
 **********************/
$(function () {
	//alert("hi");
	
	var text_max = 55;
	$('#tutorial45_feedback').html( text_max + ' characters remaining');

	$('#tutorial45').keyup(function (e) {
		var text_length = $('#tutorial45').val().length;
		var text_remaining = text_max - text_length;

		$('#tutorial45_feedback').html( text_remaining + ' characters remaining');
	});
});




/**********************************
 *  Tutorial 47: Hide/Show a DIV  *
 **********************************/
$('#hideshow').toggle(function (e) {
	$('#hideshow').text('Show');
	$('#message').hide();
}, function () {
	$('#hideshow').text('Hide');
	$('#message').show();
});

// not needed cause we have it above with hide() and show() 
// just wanted to show the toggle() function with a div
/*
 *$('#hideshow').click(function (e) {
 *    $('#message').toggle();
 *});
 */




/********************************************
 *  Tutorial 48-51: Hover over description  *
 ********************************************/
$('.hover').mousemove(function (e) {
	//alert("Mouse move");
	$('#coordinate').text('x: ' + e.clientX + 'y: ' + e.clientY);
	
	// this way would just show the first hovertext="Google a powerful..."
	//var hovertext = $('.hover').attr('hovertext');

	// this one correctly show their proper hovertext
	var hovertext = $(this).attr('hovertext');
	//alert(hovertext);
	
	$('#hover-div').text(hovertext).show();
	$('#hover-div').css('top', e.clientY + 10).css('left', e.clientX + 10);
});
$('.hover').mouseout(function (e) {
	$('#hover-div').hide();
});





/***************************************
 *  Tutorial 52: html used for a copy  *
 ***************************************/
$('#copy-button').click(function (e) {
	var text = $('#52').html();
	$('#52-paste').html(text);
});




/************************
 *  Tutorial 53: val()  *
 ************************/
$('#53-button').click(function (e) {
	var text = $('#53-name').val();
	$('#53-area').text(text);
});
$('#53-name').keyup(function (e) {
	var text = $('#53-name').val();
	var length = $('#53-name').val().length;
	$('#53-bind').text(text);
	$('#53-length').text(length);
});



/*************************
 *  Tutorial 54: attr()  *
 *************************/
var attr = $('#54-link').attr('href');
$('#54-attr-href').text(attr);
var target = $('#54-link').attr('target');
$('#54-attr-target').text(target);




/*****************************
 *  Tutorial 55: addClass()  *
 *****************************/
$('#55-button').click(function (e) {
	$('#55-sometext').addClass('bold');
});




/********************************
 *  Tutorial 56: removeClass()  *
 ********************************/
$('#56-sometext').toggle(function (e) {
	$('#56-sometext').addClass('highlight bold')
}, function () {
	$('#56-sometext').removeClass('highlight bold');
});



/********************************
 *  Tutorial 57: toggleClass()  *
 ********************************/
$('#57-sometext').click(function (e) {
	$('#57-sometext').toggleClass('highlight bold');
});
$('#57-input').focus(function (e) {
	$('#57-input').toggleClass('highlight');
});
$('#57-input').blur(function (e) {
	$('#57-input').toggleClass('highlight');
});



/*******************************
 *  Tutorial 58-59: removeAttr()  *
 *  could not get working
 *******************************/
$(function () {
	$('#58-agree').change(function (e) {
		//alert("Checked");
		// for some reason the value state does not return to empty string after unchecked
		state = $(this).attr('value');
		//var state = $(this).val();
		alert(state);
	});
});



/**************************
 *  Tutorial 60-61: each  *
 **************************/
$(function () {
	$('#60-combine').click(function (e) {
		var combined_text = "";

		//$('#60-names').each(function () { // this doesn't work
		$('input[ type="text"]').each(function () {
			combined_text += $(this).val() + ' ';
		});
		//alert(combined_text);
		
		$('#60-output').text(combined_text);

	});
});



/***************************************************
 *  Tutorial 62-63: next/nextAll and prev/prevAll  *
 ***************************************************/
$(function () {
	$('.62-names li:first').append(' (First)');
	$('.62-names li:last').append(' (Last)');

	// find()
	$('.62-names').find('li').first().append(' "this is appened using the find method"');
	$('.62-names').find('li').first().next().append(' "this is appened using the find method"');
	$('.62-names').find('li').last().append(' "this is appened using the find method"');
});

$(function () {
	$('.62-menu').find('li').first().addClass('bold').nextAll().append(' "this is added with nextAll()"');
});




/*************************
 *  Tutorial 68 and 69: 
 *  Fad In and Out  *
 *************************/
$(function () {
	$('#68-image').fadeIn('slow', function () {
		$('#68-alert').html('Finishing loading with effect');
	});
});
$('#69-show').click(function (e) {
	$('#68-image').fadeIn(3000, function () {
		$('#69-message').html("Image has been shown");
	});
});
$('#69-hide').click(function (e) {
	$('#68-image').fadeOut(3000, function () {
		$('#69-message').html("Image has been hidden");
	});
});


/******************************
 *  Tutorial 70: Fade Toggle  *
 ******************************/
$('#70-fade').click(function (e) {
	$('#70-image').fadeToggle('slow');
});



/*****************************
 *  Tutorial 71-74: 
 *  Slide Down, Up, Toggle, Stop  *
 *****************************/
$(function () {
	$('#message-71').slideDown('slow');

	$('#hide-72').click(function (e) {
		$('#message-71').slideUp('fast');
	});
});
$('#toggle-73').click(function (e) {
	$('#message-71').slideToggle(5000);
});
$('#stop-74').click(function (e) {
	$('#message-71').stop();
});


/************************
 *  Tutorial 75: Delay  *
 ************************/
$('#go-75').click(function (e) {
	$('#sample-75').fadeOut('slow').delay(3000).fadeIn('slow');
});




/****************************
 *  Tutorial 76-77: fadeTo  *
 ****************************/
$('#fade-76').click(function (e) {
	$('#image-76').fadeTo(100, 0.5);
});
$(function () {
	$('.image-77').css('opacity', '0.4');
	$('.image-77').mouseover(function (e) {
		$(this).fadeTo(10, 1, function () {
			$('.image-77').not(this).fadeTo(10, 0.4);
		});
	});
});



/***************************
 *  Tutorial 78: append()  *
 ***************************/
$('#button-78').click(function (e) {
	$('#area-78').append('1 ');
	$('.class-area-78').append('1 ');
});
$('#name-button-78').click(function (e) {
	var name = $('#name-78').val();
	$('#sentence-78').append(name);
});



/*****************************
 *  Tutorial 79: appendTo()  *
 *****************************/
$('#appendTo-79').click(function (e) {
	$('#paragraph1-79').appendTo('#paragraph2-79');
	$('#paragraph3-79').appendTo('#paragraph4-79');
});




/*****************************
 *  Tutorial 80: clone()  *
 *****************************/
$('#appendTo-80').click(function (e) {
	$('#paragraph3-80').clone().appendTo('#paragraph4-80');
});


/**********************************
 *  Tutorial 81-82: width/height  *
 **********************************/
$(function () {
	var div_heigth = $('#box-81').height();
	var div_width = $('#box-81').width();
	var div_heigth_csv = $('#box-81').css('height');
	var div_width_csv = $('#box-81').css('width');
	$('#box-81').text('Width: ' + div_width + ' | Height: ' + div_heigth + ', this is done with height and width methods');
	$('#box2-81').text('Width: ' + div_width_csv + ' | Height: ' + div_heigth_csv + ', this is done with css method passing height and width attributes');
	$('#box3-81').text('Width: ' + parseInt(div_width_csv) + ' | Height: ' + parseInt(div_heigth_csv) + ', this is done with css method passing height and width attributes and parseInt');
});

$(function () {
	var window_height = $(window).height();
	var window_width = $(window).width();

	$('#fit_82').css('height', window_height).css('width', window_width);
});


/****************************
 *  Tutorial 83: scrollTop  *
 ****************************/
$(function () {
	$('#textarea-83').scroll(function (e) {
		var scroll_top_iframe = $(this).scrollTop();
		var scroll_top_window = $(window).scrollTop();
		$('#feedback-83').text('Currently at position: ' + scroll_top_iframe + ' in iframe');
		$('#feedback2-83').text('Currently at position: ' + scroll_top_window + ' in window');
	});
});


/********************************************
 *  Tutorial 84: adding to a dropdown menu  *
 ********************************************/
$('.link_84').click(function (e) {
	var item = $(this).text();
	//alert(item);
	
	$('#list_84').append('<option>' + item + '</option>');
});



/**********************************************************
 *  Tutorial 85-86: Placing DIV in very center of window  *
 **********************************************************/
$(function () {
	function move_div() {
		window_width = $(window).width();
		window_height = $(window).height();

		object_width = $('#verycenter_85').width();
		object_height = $('#verycenter_85').height();
		//alert("Width: " + window_width + " Height: " + window_height);
		//alert("Width: " + object_width + " Height: " + object_height);
		//
		//$('#verycenter_85').css('top', (window_height/2) -(object_height/2)).css('left', (window_width/2) - (object_width/2));
		$('#verycenter_85').css('left', (window_width/2) - (object_width/2));
	}
	move_div();

	$(window).resize(function (e) {
		move_div();
	});
});



/***********************************************
 *  Tutorial 87-88: Minimum text field length  *
 ***********************************************/
$(function () {
	$('.inputs_87').focus(function (e) {
		this_val = $(this);
		minlength = this_val.attr('minlength');

		if (minlength !=0 &&
		   minlength > 0 &&
		   this_val.val().length < minlength) {
			
			this_val.after(' <span>' + minlength + ' characters required</span>');
		}
	});
	$('.inputs_87').blur(function (e) {
			this_val.next().remove();
	});
	$('.inputs_87').keyup(function (e) {
		if (this_val.val().length >= minlength) {
			this_val.next().remove();
		}	
	});
});


/********************************
 *  Tutorial 89: Scroll to top  *
 ********************************/
$(function () {
	$('.top_89').click(function (e) {
		//$('html, body').animate({scrollTop: 0}, 10000);
		$('#mememe').animate({scrollTop: 0}, 10000);
	});
});


/*******************************************************
 *  Tutorial 90-91: Enabling checkbox after scrolling  *
 *******************************************************/
$(function () {
	$('#agree_90').attr('disabled', 'disabled');

	$('#terms_90').scroll(function (e) {
		var textarea_height = $(this)[0].scrollHeight;
		var scroll_height = textarea_height - $(this).innerHeight();
		var scroll_top = $(this).scrollTop();
		$('#feedback_90').text(textarea_height + "\n" + $(this).innerHeight() + "\n" + scroll_height + "\n" + scroll_top);

		if (scroll_top == scroll_height) {
			$('#agree_90').removeAttr('disabled');
		}
	});
});
