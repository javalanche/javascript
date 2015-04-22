/*********************************************************************
 *                            non-closure                            *
 *********************************************************************/
// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background="white";

var nums = [1,2,3];

var nonClosure = document.createElement('div');
nonClosure.textContent = "Non-closure: try to click on me and see what I return";
document.body.appendChild(nonClosure);
// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

	// This is the number we're on...
	var num = nums[i];

	// We're creating a DOM element for the number
	var elem = document.createElement('div');
	elem.textContent = num;

	// ... and when we click, alert the value of `num`
	elem.addEventListener('click', function() {
		alert(num);
	});

	// finally, let's add this element to the document
	document.body.appendChild(elem);
};



/*********************************************************************
 *                              closure                              *
 *********************************************************************/
 // clear the screen for testing

 var nums = [1,2,3];

var closure = document.createElement('div');
closure.textContent = "Closure: try to click on me and see what I return";
document.body.appendChild(closure);
 // Let's loop over the numbers in our array
 for (var i = 0; i < nums.length; i++) {

	 // This is the number we're on...
	 var num = nums[i];

	 // We're creating a DOM element for the number
	 var elem = document.createElement('div');
	 elem.textContent = num;

	 // ... and when we click, alert the value of `num`
	 elem.addEventListener('click', (function(numCopy) {
		 return function() {
			 alert(numCopy);
		 };
	 })(num));

	 document.body.appendChild(elem);
 };
