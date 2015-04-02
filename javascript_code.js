
// Different type of pizza objects
var veggiePizza = {
	basicToppings:['Mushrooms',' Mozzarella'],
	veggiePizza1 :{ 
				extraToppings: ['Red pepper',' Broccoli',' Onions',' Olives'],
				name:['Pizza Royale','Imperiale Pizza','Tzar Pizza']
				},
	veggiePizza2 :{ 
				extraToppings: ['Asparagus',' Spinach'],
				name:['Super Veggie Pizza','Ultimate Veggie Pizza','Just Veggie Pizza']
				},
 	veggiePizza3 :{
 				extraToppings: ['Eggplant',' Cucumber'],
				name:['Really Cucumber Pizza','Cucumber Pizza','Eggplant Pizza']
				}	
};

var meatPizza = {
	basicToppings:['Pepperoni',' Mozzarella'],
	meatPizza1 :{
				extraToppings: ['Beef',' Pork',' Chicken'],
				name:['The 4 Meats Pizza','The Meaty Pizza','The San Fransico Pizza']
				},
	meatPizza2 :{ 
				extraToppings: ['Chicken',' Tomatoes'],
				name:['Chicky Pizza','Chicken Pizza','The SF Chicken Pizza']
				},
 	meatPizza3 :{
 				extraToppings: ['Rabbit',' Asparagus',' Tomatoes'],
 				name:['PlayBoy Pizza','Bunny Pizza','The Easter Pizza']
				}			
};

var cheesePizza = {
	basicToppings:['Provolone',' Mozzarella'],
	cheesePizza1 :{ 
				extraToppings: ['American Cheese',' Munster'],
				name:['The American Pizza','The Americana Pizza','The Merica Pizza']
				},
	cheesePizza2 :{ 
				extraToppings: ['Gruyere',' Brie'],
				name:['French Pizza','The Frenchy Pizza','The Stincky-Cheese Pizza']
				},
 	cheesePizza3 :{
 				extraToppings: ['Gouda',' Leerdammer'],
 				name:['The Holland Pizza','The Oranje Pizza','The Polders Pizza']
				}	
};

// Different type of restaurants objects
var restaurant ={
	chicago:{
		name:'The Great Chicago Pizzeria',
		address:'2000 West Madison St., 60290 Chicago',
		phone:'(312) 000-0000'
	},
	newYork:{
		name:'La meilleur Pizza New-York',
		address:'2000 Broadway St., 10001 NY',
		phone:'(718) 000-0000'
	},
	sanFranscisco:{
		name:'The Ultimate San Fransico Pizza',
		address:'2000 Lombard St., 94101 SF',
		phone:'(415) 000-0000'
	}

};


$(document).ready(function() {

	// Make the drop down menus visible
	$('.myMenu > li').hover(openSubMenu)
	$('.myPizza > li').hover(openSubMenu)

	function openSubMenu() {
		$(this).find('ul').toggle();	
	};


	// Modify the page when a location is selected
	$('.myMenu li ul li').click( function(event){
		var location = $(this).attr('id');
		$('#flag').empty();

		$(document).find('#pizzeria').show();
		$(document).find('#description').hide();

		if (location == 'Chi'){
			$('#title ,#restaurant').text(restaurant.chicago.name);
			$('#address').text(restaurant.chicago.address);
			$('#phone').text(restaurant.chicago.phone);
			$('#flag').prepend('<img id="imgChicago" src="http://www.flags-and-anthems.com/media/flags/flagge-chicago.gif" />')
			$('#invitChoice').hide();
			$('#pizzeria').removeClass();
			$('#pizzeria').addClass('Chi');

			var index = 0;
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');
			
		}

		else if (location == 'NY'){
			$('#title ,#restaurant').text(restaurant.newYork.name);
			$('#address').text(restaurant.newYork.address);
			$('#phone').text(restaurant.newYork.phone);
			$('#flag').prepend('<img id="imgNY" src="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/2000px-Flag_of_New_York.svg.png" />')
			$('#invitChoice').hide();
			$('#pizzeria').removeClass();
			$('#pizzeria').addClass('NY');

			var index = 1;
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');
		}

		else {
			$('#title ,#restaurant').text(restaurant.sanFranscisco.name);
			$('#address').text(restaurant.sanFranscisco.address);
			$('#phone').text(restaurant.sanFranscisco.phone);
			$('#flag').prepend('<img id="imgSF" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_San_Francisco.svg/2000px-Flag_of_San_Francisco.svg.png" />')
			$('#invitChoice').hide();
			$('#pizzeria').removeClass();
			$('#pizzeria').addClass('SF');

			var index = 2;
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');

		}
		// change the pizza name in function of location
		function changePizzaName(className, indexRestaurant, objectPizzaType, pizzaType){
				var id = '.' + className;
				var indexPizza = 1;

				$(id).each(function(){
					var property = pizzaType + indexPizza;
					$(this).text(objectPizzaType[property].name[indexRestaurant]);
					indexPizza ++;
				});		
		};
	
	});

	// Give composition of the pizza when selected
	$('.myPizza li ul li').click( function(event){
		$(document).find('#description').show();

		var id = $(this).attr('id');

		// determine the index for the pizza name in function of location
		var city = $('#pizzeria').attr('class');
		if (city == 'Chi'){
			var index = 0;
		}
		else if (city == 'NY'){
			var index = 1;
		}
		else {
			var index = 2;
		}

		var typeOfPizza = $(this).attr('class');
		


		if (typeOfPizza == 'veggie'){
			ingredients(veggiePizza, id);
			pizzaName(veggiePizza, id, index);
			pizzaType(typeOfPizza);
		}

		else if (typeOfPizza == 'meat' ){
			ingredients(meatPizza, id);
			pizzaName(meatPizza, id, index);
			pizzaType(typeOfPizza);
		}

		else {
			ingredients(cheesePizza, id);
			pizzaName(cheesePizza, id, index);
			pizzaType(typeOfPizza);
		}

		// add the list of ingredients contain in the pizza to the page
		function ingredients(typePizza, typePizzaIndex){
			$('#ingredients').text(typePizza.basicToppings +', '+ typePizza[typePizzaIndex].extraToppings);
		};

		// Write the pizza name in the pizza description
		function pizzaName(typePizza, typePizzaIndex, indexName){
			console.log(index);
			$('#pizzaName').text(typePizza[typePizzaIndex].name[indexName]);
		};

		// Write the type of the selected pizza in the description & capitalize the pizza type
		function pizzaType(type){
			var capitalizedTypeName = type.charAt(0).toUpperCase() + type.substring(1);
			$('#pizzaType').text(capitalizedTypeName);
		};
	});
});

