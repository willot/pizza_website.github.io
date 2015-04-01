$(document).ready(function() {
		$('.myMenu > li').bind('mouseover', openSubMenu);
		$('.myMenu > li').bind('mouseout', closeSubMenu);
		
		$('.myPizza > li').bind('mouseover', openSubMenu);
		$('.myPizza > li').bind('mouseout', closeSubMenu);

		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		};
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		};
				   
});


$(document).ready(function() {
	$('.myMenu li ul li').click( function(event){

		$(document).find('#pizzeria').css('visibility', 'visible');
		$('.myMenu').hide();

		if ($(this).attr('id') == 'Chi'){
			$('#title').text("The Great Chicago Pizzeria");
			$('#restaurant').text("The Great Chicago Pizzeria");
			$("#veg_1").text("pizza Royale");
			// $("#pizzeria").addClass("Chicago");
		}

		else if ($(this).attr('id') == 'NY'){
			$('#title').text("La meilleur Pizza New-York");
			$('#restaurant').text("TLa meilleur Pizza New-York");
		}

		else {
			$('#title').text("The ultimate San Fransico Pizza");
			$('#restaurant').text("The ultimate San Fransico Pizza");
		}

		
	});
});			

var veggiePizza = {
	topping_1 :"mushroom",
	topping_2 :"mozarella",
	veggiePizza1 :{ topping_1 :"red pepper",
				topping_2 :"brocoli",
				name1="pizza royale",
				name2="pizza imperiale"
				name3="pizza tzar"
			},
	veggiePizza2 :{ topping_1 :"asparagus",
				topping_2 :"spinach"},
 	veggiePizza3 :{topping_1 :"eggplant",
				topping_2 :"cucumber"}			
}



$(document).ready(function() {
	$('.myPizza li ul li').click( function(event){
		$(document).find('#description').css('visibility', 'visible');
		var idElement = $(this).attr('id');

		if (idElement == 'veggiePizza1'){
			// var element2 = idElement;
				// if (idElement == 'veggiePizza1' ||'veggiePizza2' || 'veggiePizza3'){
				// 	var element1 = veggiePizza;
				// }
			ingredients(veggiePizza, veggiePizza1);
		}
		
	});
	function ingredients(element1, element2){
			$("#ingredients").text(element1.topping_1 +" "+ element1.topping_2 +" "+ element1.element2.topping_1+" "+ element1.element2.topping_2);
	}
});	

