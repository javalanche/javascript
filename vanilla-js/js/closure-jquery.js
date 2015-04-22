var nums = [1, 2, 3];

//$('body').append('<div class="template"></div>');
//$('.template').text("This is non-closure");
//for (var i = 0, len = nums.length; i < len; i++) {
	//// This is the number we're on...
	//var num = nums[i];

	//// We're creating a DOM element for the number
	//$('.template').append('<div class="divs ' + num +'">' + num + '</div>');

	//// ... and when we click, alert the value of `num`
	//$('.' + num).click(function (e) {
		//alert(num);
	//});
//};
$('body').append('<div class="template2"></div>');
$('.template2').text('This is closure');
for (var i = 0, len = nums.length; i < len; i++) {
	// This is the number we're on...
	var num = nums[i];

	// We're creating a DOM element for the number
	var num = num + 3;
	$('.template2').append('<div class="divs ' + num +'">' + num + '</div>');
	
	// ... and when we click, alert the value of `num`
	$('.' + num).click(function (e) {
		alert($(this).text());
	});
};
