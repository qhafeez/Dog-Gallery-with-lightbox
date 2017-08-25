var $searchField = $("#searchField");


//array of images
var $images = $("#imageGallery img");


//empty array that will be used for filtering
var cache =[];

$images.each(function(){

	cache.push({
		//element property is a reference to the entire img
		element:$(this),

		//tect property is the img's alt propety
		text:$(this).attr("alt").trim().toLowerCase()

	});

	
});

console.log(cache);


function filter(){

		//query is the value in the input field
		var query = this.value.trim().toLowerCase();

		
		//forEach is looping through every element in the cache array
		cache.forEach(function(img){

				var index=0;

				//if there is something in the search field
				if(query){
					//this looks to see if the query exists in each element's text property.
					//indexOf returns a number, which is the position of the query within the text property
					//if the query does not match anything, indexOf returns the number -1
					index = img.text.indexOf(query);
				}

				if(index !== -1){
					//if the index is not equal to -1, that means the query is a match
					//for something in the text property and that element should be shown
					img.element.parent().parent().show("fast");
				} else {
					//if the index is -1, that means the query is a not a match
					//for something in the text property and that element should be hidden
					img.element.parent().parent().hide("fast");
				}

		});



}

$searchField.on("keyup", filter);