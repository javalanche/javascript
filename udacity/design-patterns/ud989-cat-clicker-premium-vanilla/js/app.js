
/* ======= Model ======= */

var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
};


/* ======= Octopus ======= */

var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
		catAdminView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
		catAdminView.render();
    },
	
	setAnythingAdmin: function() {
		var cats = this.getCats();
		var cat; 
		var counter = 0;

		for (var i = 0, len = cats.length; i < len; i++) {
		//for (var i = 0, len = document.cat_form.length; i < len; i++) {
			cat = cats[i];

			//var x = document.cat_form.length;
			//var x = document.cat_form.elements.item(i).value;
			//alert("this is item: " + i + "-->"+ x);

			cat.name = document.cat_form.elements.item(counter).value;
			cat.clickCount = document.cat_form.elements.item(counter + 1).value;
			counter++;
			counter++;
		}
		catListView.init();
		catView.init();
		//this.init();
	}
};


/* ======= View ======= */

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

var catAdminView = {
	init: function() {
		this.setButton();		
		this.render();
	},

	setButton: function() {
		//can't use this var button will disappear or not update display?*?!!*
		var buttonElm = document.getElementById('admin_button');
		document.getElementById('admin_button').addEventListener('click', function () {
			if ('none' == document.getElementById('cat-list').style.display) {
				document.getElementById('cat-list').style.display = '';
				document.getElementById('cat_form').style.display = 'none';
			} else {
				document.getElementById('cat-list').style.display = 'none';
				document.getElementById('cat_form').style.display = '';
			}
			octopus.setAnythingAdmin();
		});
	},

	render: function() {
		var cat, element;
		var cats = octopus.getCats();


		for (var i = 0, len = cats.length; i < len; i++) {
			cat = cats[i];

			document.getElementById(i.toString()).innerHTML = '';

			element = document.createElement('TD');
			//element.textContent = cat.name;
			
			var name = document.createElement("INPUT");
			name.setAttribute('type', "text");
			name.setAttribute('value', cat.name);
			element.appendChild(name);

			var click = document.createElement("INPUT");
			click.setAttribute('type', "text");
			click.setAttribute('value', cat.clickCount);
			element.appendChild(click);

			document.getElementById(i.toString()).appendChild(element);
		}
	}
};

// make it go!
octopus.init();
//octopus.setAnythingAdmin();
