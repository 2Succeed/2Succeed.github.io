angular.module('myApp', []).controller('recipeCtrl', function($scope) {
    $scope.myGroceries = ["apples (6)","bananas (10)","bread (2)","milk (1 gallon)","butter (1 pack)","eggs (1 dozen)"];
    $scope.addedMeals = [];
    $scope.isList = true;
    
    $scope.meals = [
        {id:1, 
         name:"Taco Tots", 
         description:"[Dinner] Doug's Recipe - Mexican Cheesy Tator Tot Casserole With Veggies",
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdishnthekitchen.com%2Fwp-content%2Fuploads%2F2019%2F02%2Ftacocasserole4-1460x973.jpg&f=1&nofb=1",
         ingredients:["ground beef (1 pound)","garlic (2 cloves)","taco seasoning (1 pack)","enchilada sauce (1 can)","corn (1 can)","green pepper (1)","black beans (1 can)","cheddar cheese (2 bags)","tator tots (1 bag)","salsa (.5 jar)","shredded lettuce (1 bag)","sour cream (optional)","tomato (1 (optional))"], 
         recipes:["Preheat oven to 400 degrees","Brown ground beef, onion and garlic over medium high until no pink remains. Drain any fat.","Stir in taco seasoning, 1/2 cup water, 2/3 cup enchilada sauce, corn, bell pepper and beans. Cook until thickened (about 5 minutes)","Pour beef mixture into a 9×13 pan. Sprinkle with 1 1/2 cups cheese and arrange tater tots on top.","Bake 30 minutes. Combine salsa and remaining 1/3 cup enchilada sauce. Spread over tater tots and top with remaining cheese.","Bake an additional 10 minutes or until cheese is melted and bubbly.","Serve with desired toppings"], 
         rating:[1,2,3,4,5]
        },
        {id:2,
         name:"Enchiladas", 
         description:"[Dinner] Doug's Recipe - Mexican Chicken Enchiladas", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yxeb639dr1l5PUOpynE1oAHaEs%26pid%3DApi&f=1",
         ingredients:["corn tortillas (1 big pack)","onion (1)","enchilada sauce (3 cans)","cheese (2 bags)","chicken strips (1 bag)","black beans (1 can)"], 
         recipes:["Preheat oven to 350°F.","In large sauté pan, heat oil over medium-high heat. Add onion and sauté for 3 minutes, stirring occasionally.  Add diced chicken and green chiles, and season with a generous pinch of salt and pepper.  Sauté the mixture for 6-8 minutes, stirring occasionally, or until the chicken is cooked through.  Add in the beans and stir until evenly combined.  Remove pan from heat and set aside.","To assemble the enchiladas, set up an assembly line including: tortillas, enchilada sauce, chicken mixture, and cheese. Lay out a tortilla, and spread two tablespoons of sauce over the surface of the tortilla.  Add a generous spoonful of the chicken mixture in a line down the center of the tortilla, then sprinkle with 1/3 cup cheese. Roll up tortilla and place in a greased 9 x 13-inch baking dish.","Assemble the remaining enchiladas.  Then spread any remaining sauce evenly over the top of the enchiladas, followed by any extra cheese.","Bake uncovered for 20 minutes, until the enchiladas are cooked through and the tortillas are slightly crispy on the outside.  Remove pan from the oven and serve the enchiladas while they’re nice and warm, garnished with lots of toppings.",""], 
         rating:[1,2,3,4]
        },
        {id:3,
         name:"Meat Loaf", 
         description:"[Dinner] Doug's Recipe - Super Sweet Meat Loaf", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.simplemost.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fmeatloaf.jpg&f=1&nofb=1",
         ingredients:["butter (1 tablespoon)","onion (1/4 cup)","garlic (2 cloves)","salt (1.5 teaspoons)","pepper (1.5 teaspoons)","ground beef (2 pounds)","bread crumbs (1 cup)","eggs (1)","worcestershire (1.5 tablespoons)","tomato sauce (15 ounce)","ketchup (3 tablespoons)"], 
         recipes:["Set Oven to 350","Melt the butter in a skillet over medium heat, and cook the onion and garlic 5 minutes, until onion is tender. Remove from heat, and season with salt and pepper.","In a large bowl, mix the onion and garlic, beef, crumbled bread, crushed crackers, egg, sour cream, Worcestershire sauce, and 1/2 can tomato sauce. Gradually stir in the milk 1 teaspoon at a time until mixture is moist, but not soggy. Transfer the mixture to a 5x9 inch loaf pan.","Bake uncovered in the preheated oven 40 minutes. Increase oven temperature to 400 degrees F (200 degrees C), and continue baking 15 minutes, to an internal temperature of 160 degrees F (70 degrees C).","In a small bowl, mix the remaining tomato sauce and ketchup. Pour over the top of the meatloaf, and continue baking 10 minutes."], 
         rating:[1,2,3,4]
        },
        {id:4, 
         name:"Celery", 
         description:"four", 
         link: "https://cdn.mos.cms.futurecdn.net/M7e7tKGmULBz9tPT93U4GP-970-80.jpg.webp",
         ingredients:["1 bag taco tots","4 apples","4.5 cups of sugar","3.4 salts"], 
         recipes:["Set Oven to 350","Melt the butter in a skillet over medium heat, and cook the onion and garlic 5 minutes, until onion is tender. Remove from heat, and season with salt and pepper.","In a large bowl, mix the onion and garlic, beef, crumbled bread, crushed crackers, egg, sour cream, Worcestershire sauce, and 1/2 can tomato sauce. Gradually stir in the milk 1 teaspoon at a time until mixture is moist, but not soggy. Transfer the mixture to a 5x9 inch loaf pan."], 
         rating:[1,2,3,4,5]
        },
        {id:5, 
         name:"Grandmas", 
         description:"five", 
         link: "https://images-gmi-pmc.edge-generalmills.com/cbe8b51a-c3c1-4dcf-8d79-76f98565d3e0.jpg",
         ingredients:["1 bag taco tots","4 apples","4.5 cups of sugar","3.4 salts"], 
         recipes:["Set Oven to 350","Make Your Stuff","Eat Your Stuff"], 
         rating:[1,2,3,4,5]},
    ];
    
    $scope.addToList = function(name, item){
        $scope.addedMeals.push(name);
        for(let i=0; i<item.length; i++){
            $scope.number = parseFloat(item[i].replace( /[^\d\.]*/g, ''));
            console.log($scope.number);
            console.log(item[i]);
            $scope.myGroceries.push(item[i])
        }
        $scope.myGroceries.sort();
        $scope.isList = true;
    };
    
    $scope.removeFromList = function(i){
        $scope.myGroceries.splice(i, 1);
        if($scope.myGroceries.length == 0){ $scope.isList = false; }
    };

    $scope.email = function(){
        let space = '%0D%0A';
        let body = '';
        for(let i=0; i<$scope.myGroceries.length; i++){
            body +=$scope.myGroceries[i]+space;
        }
        body += space;
        window.open('mailto:dirgswords@gmail.com?subject=Grocery%20List&body='+body);
        console.log("Email Accomplished!");
    };
    
    $scope.emailRecipe = function(name, ingredients, directions){
        let space = '%0D%0A';
        let body = '';
        body += name+" Recipe";
        body += space;
        body += space;
        body += "---Ingredients---"+space;
        for(let i=0; i<ingredients.length; i++){ body +=ingredients[i]+space; }
        body += space;
        body += "---Directions---"+space;
        for(let i=0; i<directions.length; i++){ body +=directions[i]+space; }
        body += space;
        window.open('mailto:dirgswords@gmail.com?subject=Reeds%20Recipes%20'+name+'&body='+body);
        console.log("Email Accomplished!");
    };
    
    $scope.clearList = function(){
        $scope.myGroceries = [];
        $scope.isList = false;
    };
    
});
