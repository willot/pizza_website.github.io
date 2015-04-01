var veggiePizza = {
	basicToppings:['Mushroom',' Mozarella'],
	veggiePizza1 :{ 
				extraToppings: ['Red pepper',' Broccoli','Onion','Olive'],
				name:['Pizza Royale','Imperiale Pizza','Tzar Pizza']
				},
	veggiePizza2 :{ 
				extraToppings: ['Red Asparagus',' Spinach'],
				name:['Super Veggie Pizza','Ultimate Veggie Pizza','Just Veggie Pizza']
				},
 	veggiePizza3 :{
 				extraToppings: ['Red Eggplant',' Cucumber'],
				name:['Really Cucumber Pizza','Cucumber Pizza','That Sounds Bad Pizza']
				}	
};

var meatPizza = {
	basicToppings:['Pepperoni','Mozarella'],
	meatPizza1 :{
				extraToppings: ['Red Beef',' Porc','Chicken'],
				name:['The Meat Pizza','The meaty Pizza','The San Fransico Pizza']
				},
	meatPizza2 :{ 
				extraToppings: ['Chicken',' Tomatoes'],
				name:['Chicky Pizza','Chicken Pizza','The SF Chicken Pizza']
				},
 	meatPizza3 :{
 				extraToppings: ['Rabbit',' Asparagus','Tomatoes'],
 				name:['PlayBoy Pizza','Bunny Pizza','The Eastern Pizza']
				}			
};

var cheesePizza = {
	basicToppings:['Provolone','Mozarella'],
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

		$(document).find('#pizzeria').css('visibility', 'visible');
		$('.myMenu').hide();

		if ($(this).attr('id') == 'Chi'){
			$('#title').text('The Great Chicago Pizzeria');
			$('#restaurant').text('The Great Chicago Pizzeria');
			var index = 0
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');
			
		}

		else if ($(this).attr('id') == 'NY'){
			$('#title').text('La meilleur Pizza New-York');
			$('#restaurant').text('TLa meilleur Pizza New-York');
			var index = 1
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');
		}

		else {
			$('#title').text('The ultimate San Fransico Pizza');
			$('#restaurant').text('The ultimate San Fransico Pizza');
			var index = 2
			changePizzaName('veggie', index, veggiePizza, 'veggiePizza');
			changePizzaName('meat', index, meatPizza, 'meatPizza');
			changePizzaName('cheese', index, cheesePizza, 'cheesePizza');

			}

		function changePizzaName(element1, element2, element3, element4){
				var id = '.' + element1;
				var indexProperty = 1;

				$(id).each(function(){
					var property = element4 + indexProperty;
					$(this).text(element3[property].name[element2]);
					indexProperty ++;
				});		
		};
	
	});

	// Give composition of the pizza when selected
	$('.myPizza li ul li').click( function(event){
		$(document).find('#description').css('visibility', 'visible');
		var idElement = $(this).attr('id');

		if (idElement == 'veggiePizza1'){
				ingredients(veggiePizza, veggiePizza.veggiePizza1);
		}
		
		function ingredients(element1, element2){
			$('#ingredients').text(element1.basicToppings +', '+ element2.extraToppings);
		};
	});



});



// $(document).ready(function() {
// 	$('.myPizza li ul li').click( function(event){
// 		$(document).find('#description').css('visibility', 'visible');
// 		var idElement = $(this).attr('id');

// 		if (idElement == 'veggiePizza1'){
// 			// var element2 = idElement;
// 				// if (idElement == 'veggiePizza1' ||'veggiePizza2' || 'veggiePizza3'){
// 				// 	var element1 = veggiePizza;
// 				// }
// 			ingredients(veggiePizza, veggiePizza1);
// 		}
		
// 	});
// 	function ingredients(element1, element2){
// 			$('#ingredients').text(element1.topping_1 +' '+ element1.topping_2 +' '+ element1.element2.topping_1+' '+ element1.element2.topping_2);
// 	}
// });	
