# Dojo_Pizzeria
HTML page for users to select all options to build a custom pizza.  
Includes optional feature to randomly assign all available options and present the results of the currently selected choices.

Crust and Sauce can only have 1 item per a pizza.  
-Users can select from drop down menu.

Pizza can have multiple cheeses.  
-Cheese can be selected via mult-item checkmark boxes.

Pizza can have multiple toppings.  
-Toppings can be selected via mult-item checkmark boxes.

The results of the current selected options are presented to the user below.  
-Refreshed via AJAX call each time an option is changed. 

Users can click on button to randomize pizza.  
-Calls function to randomly pick crust, sause, cheese, and toppings.  
-Loops through each cheese and toppings setting true/false values for each.  
-This is so that you can end up with different amounts of cheeses and toppings each time. 

Screenshot is availible as a preview.  "Preview.JPG"
