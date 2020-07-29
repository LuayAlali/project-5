//HOW I CONVERTED JQUERY TO VANILLA JAVASCRIPT///
//create a variable for the images 
//create a varaible for the value of the search input
//listen to a keyboard event
//convert the search input to another variable and then to lowercase
// loop through all the images
// create a variable for  the value of the attribute data caption from the images
//check to see if data caption at indexOf(search) is above -1
//display the images if it is.

let images = document.getElementsByTagName('a');
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', () => {
	for(let i = 0; i < images.length; i++ ){
		let search = searchInput.value;
		search = search.toLowerCase();
		let caption = images[i].getAttribute('data-caption');
	if(caption.toLowerCase().indexOf(search) > -1){
		images[i].style.display = "";
	}else {
	images[i].style.display = 'none';

	}
	}

	});





// $(document).ready(function(){
// 	let images = document.getElementsByTagName('a');
// 	$("#search").on('keyup', function () {
// 	let search = $('#search').val().toLowerCase();
// 	for ( let i = 0; i < images.length; i++){
// 		let searchVal = images[i].getAttribute('data-caption');
// 		if (searchVal.toLowerCase().indexOf(search) > -1) {
// 			images[i].style.display = "";
// 			} else {
// 			images[i].style.display = "none";
// 			}
			
// 	}
// 					});
// });
	





$.fancybox.defaults.animationEffect = "zoom";
$.fancybox.defaults.transitionEffect = "zoom-in-out";

