var veggiePizza = {
	basicToppings:['Mushroom',' Mozarella'],
	veggiePizza1 :{ 
				extraToppings: ['Red pepper',' Broccoli',' Onion',' Olive'],
				name:['Pizza Royale','Imperiale Pizza','Tzar Pizza']
				},
	veggiePizza2 :{ 
				extraToppings: ['Asparagus',' Spinach'],
				name:['Super Veggie Pizza','Ultimate Veggie Pizza','Just Veggie Pizza']
				},
 	veggiePizza3 :{
 				extraToppings: ['Eggplant',' Cucumber'],
				name:['Really Cucumber Pizza','Cucumber Pizza','That Sounds Bad Pizza']
				}	
};

var meatPizza = {
	basicToppings:['Pepperoni',' Mozarella'],
	meatPizza1 :{
				extraToppings: ['Beef',' Pork',' Chicken'],
				name:['The Meat Pizza','The meaty Pizza','The San Fransico Pizza']
				},
	meatPizza2 :{ 
				extraToppings: ['Chicken',' Tomatoes'],
				name:['Chicky Pizza','Chicken Pizza','The SF Chicken Pizza']
				},
 	meatPizza3 :{
 				extraToppings: ['Rabbit',' Asparagus',' Tomatoes'],
 				name:['PlayBoy Pizza','Bunny Pizza','The Eastern Pizza']
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
				name:['French Pizza','The Frenchy Pizza','The Stincky Pizza']
				},
 	cheesePizza3 :{
 				extraToppings: ['Gouda',' Leerdammer'],
 				name:['The Holland Pizza','The Oranje Pizza','The Polders Pizza']
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

		$(document).find('#pizzeria').show();
		// $('.myMenu').hide();
		// $('.myMenu').attr('id', 'changeLocation')

		if (location == 'Chi'){
			$('#title ,#restaurant').text('The Great Chicago Pizzeria');
			var index = 0
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');
			
		}

		else if (location == 'NY'){
			$('#title ,#restaurant').text('La meilleur Pizza New-York');
			var index = 1
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');
		}

		else {
			$('#title ,#restaurant').text('The ultimate San Fransico Pizza');
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
			ingredients(veggiePizza, id);
		}

		else if (classObject == 'meat' ){
			ingredients(meatPizza, id);
		}

		else {
			ingredients(cheesePizza, id);
		}

		function ingredients(object, objectAttribute){
			$('#ingredients').text(object.basicToppings +', '+ object[objectAttribute].extraToppings);
		};
	});
});

