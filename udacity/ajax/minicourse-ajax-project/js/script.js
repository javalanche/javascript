function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
	var street = $('#street').val();
	var city = $('#city').val();
	//alert(street);
	//alert(city);
	alert('https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + street +',' + city);
	var adddress = street + ', ' + city;
	var streetviewURL = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + adddress + "";
	$body.append('<img class="bgimg" src="' + streetviewURL + '">');
	$('#bgimg').attr('src', 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + street +", " + city);
    return false;
};

$('#form-container').submit(loadData);

//loadData();

