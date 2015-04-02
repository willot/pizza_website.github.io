var veggiePizza = {
	basicToppings:['Mushrooms',' Mozarella'],
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
	basicToppings:['Pepperoni',' Mozarella'],
	meatPizza1 :{
				extraToppings: ['Beef',' Pork',' Chicken'],
				name:['The Meat Pizza','The Meaty Pizza','The San Fransico Pizza']
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
	basicToppings:['Provolone',' Mozarella'],
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

var restaurant ={
	chicago:{
		name:'The Great Chicago Pizzeria',
		address:'2000 West Madison St., 60290 Chicago',
		phone:'(312) 000 0000'
	},
	newYork:{
		name:'La meilleur Pizza New-York',
		address:'2000 Broadway St., 10001 NY',
		phone:'(718) 000 0000'
	},
	sanFranscisco:{
		name:'The Ultimate San Fransico Pizza',
		address:'2000 Lombard St., 94101 SF',
		phone:'(415) 000 0000'
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
			$('#invitChoice').hide()
			var index = 0
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');
			
		}

		else if (location == 'NY'){
			$('#title ,#restaurant').text(restaurant.newYork.name);
			$('#address').text(restaurant.newYork.address);
			$('#phone').text(restaurant.newYork.phone);
			$('#flag').prepend('<img id="imgNY" src="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/2000px-Flag_of_New_York.svg.png" />')
			var index = 1
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');
		}

		else {
			$('#title ,#restaurant').text(restaurant.sanFranscisco.name);
			$('#address').text(restaurant.sanFranscisco.address);
			$('#phone').text(restaurant.sanFranscisco.phone);
			$('#flag').prepend('<img id="imgSF" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_San_Francisco.svg/2000px-Flag_of_San_Francisco.svg.png" />')
			var index = 2
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');

		}

		function changePizzaName(className, indexRestaurant, object, objectAttribute){
				var id = '.' + className;
				var indexProperty = 1;

				$(id).each(function(){
					var property = objectAttribute + indexProperty;
					$(this).text(object[property].name[indexRestaurant]);
					indexProperty ++;
				});		
		};
	
	});

	// Give composition of the pizza when selected
	$('.myPizza li ul li').click( function(event){
		$(document).find('#description').show();
		var classObject = $(this).attr('class');
		var id = $(this).attr('id');

		if (classObject == 'veggie'){
			var index = 0
			ingredients(veggiePizza, id);
			pizzaName(veggiePizza, id,index);
			pizzaType(classObject);
		}

		else if (classObject == 'meat' ){
			var index =0
			ingredients(meatPizza, id);
			pizzaName(meatPizza, id, index);
			pizzaType(classObject);
		}

		else {
			var index =0
			ingredients(cheesePizza, id);
			pizzaName(cheesePizza, id, index);
			pizzaType(classObject);
		}

		function ingredients(object, objectAttribute){
			$('#ingredients').text(object.basicToppings +', '+ object[objectAttribute].extraToppings);
		};

		function pizzaName(object, objectAttribute, index){
			$('#pizzaName').text(object[objectAttribute].name[index]);
		};

		function pizzaType(type){
			var capitalized = type.charAt(0).toUpperCase() + type.substring(1);
			$('#pizzaType').text(capitalized);
		};
	});
});

