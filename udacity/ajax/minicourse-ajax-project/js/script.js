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
	//alert('https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + street +',' + city);
	var adddress = street + ', ' + city;
	var streetviewURL = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + adddress + "";
	//$body.append('<img class="bgimg" src="' + streetviewURL + '">');
	$('.bgimg').attr('src', 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + street +", " + city);

	var nytimeUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest&api-key=b00bd4af140e1e1911b567224e04bb19:1:71701859';

	$.getJSON(nytimeUrl,
		function (data, textStatus, jqXHR) {
			$nytHeaderElem.text('New York Times Article About ' + city);
			
			articles = data.response.docs;
			for (var i = 0, len = articles.length; i < len; i++) {
				var article = articles[i];
				$nytElem.append('<li class="article">'+
						'<a href="' + 
						article.web_url +
						'">'+
						article.headline.main +
						'</a>'+
						'<p>'+
						article.snippet +
						'</p>'+
						'</li>');
			}
		}
	).error(function (e) {
		$nytHeaderElem.text('New York Times Could not be loaded');
	});

	var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';
	var wikiRequestTimeout = setTimeout(function(){
		$wikiElem.text("failed to get wikipedia resources");
	}, 8000);

	$.ajax( wikiUrl, {
	// both ways work
	//$.ajax({
		//url: wikiUrl,
		type: 'GET',
		dataType: 'jsonp',
		// this is redundant cause by default is jsonp callback
		// but some APIs require other callback names
		//jsonp: "callback",
		data: $.param( $('Element or Expression') ),
		complete: function (jqXHR, textStatus) {
			//alert("you completed ajax wikiUrl");
		},
		success: function (data, textStatus, jqXHR) {
			//alert("you success ajax wikiUrl");

			var articleList = data[1];

			for (var i = 0, len = articleList.length; i < len; i++) {
				articleStr = articleList[i];
				var url = 'http://en.wikipedia.org/wiki' + articleStr;
				$wikiElem.append('<li><a href="' +
						url +
						'">' +
						articleStr +
						'</a></li>');
			}

			clearTimeout(wikiRequestTimeout);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			//alert("you error ajax wikiUrl");
		}
	});

    return false;
};

$('#form-container').submit(loadData);

//loadData();

