angular.module('myApp', []).controller('recipeCtrl', function($scope) {
    $scope.myGroceries = ["apples (6)","bananas (10)","bread (2)","milk (1 gallon)","butter (1 pack)","eggs (1 dozen)","lunch meat (rb or turkey)"];
    $scope.addedMeals = [];
    $scope.isList = true;
    
    $scope.meals = [
        {id:1, 
         name:"Taco Tots", 
         description:"[Dinner] Doug's Recipe",
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdishnthekitchen.com%2Fwp-content%2Fuploads%2F2019%2F02%2Ftacocasserole4-1460x973.jpg&f=1&nofb=1",
         ingredients:["ground beef (1 pound)","garlic (2 cloves)","taco seasoning (1 pack)","enchilada sauce (1 can)","corn (1 can)","green pepper (1)","onion (1)","black beans (1 can)","cheddar cheese (2 bags)","tator tots (1 bag)","salsa (.5 jar)","shredded lettuce (1 bag)","sour cream (optional)","tomato (1 (optional))"], 
         recipes:["Preheat oven to 400 degrees","Brown ground beef, onion and garlic over medium high until no pink remains. Drain any fat.","Stir in taco seasoning, 1/2 cup water, 2/3 cup enchilada sauce, corn, bell pepper and beans. Cook until thickened (about 5 minutes)","Pour beef mixture into a 9×13 pan. Sprinkle with 1 1/2 cups cheese and arrange tater tots on top.","Bake 30 minutes. Combine salsa and remaining 1/3 cup enchilada sauce. Spread over tater tots and top with remaining cheese.","Bake an additional 10 minutes or until cheese is melted and bubbly.","Serve with desired toppings"], 
         rating:[1,2,3,4,5]
        },
        {id:2,
         name:"Enchiladas", 
         description:"[Dinner] Doug's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yxeb639dr1l5PUOpynE1oAHaEs%26pid%3DApi&f=1",
         ingredients:["corn tortillas (1 big pack)","onion (1)","enchilada sauce (3 cans)","cheese (2 bags)","chicken strips (1 bag)","black beans (1 can)"], 
         recipes:["Preheat oven to 350°F.","In large sauté pan, heat oil over medium-high heat. Add onion and sauté for 3 minutes, stirring occasionally.  Add diced chicken and green chiles, and season with a generous pinch of salt and pepper.  Sauté the mixture for 6-8 minutes, stirring occasionally, or until the chicken is cooked through.  Add in the beans and stir until evenly combined.  Remove pan from heat and set aside.","To assemble the enchiladas, set up an assembly line including: tortillas, enchilada sauce, chicken mixture, and cheese. Lay out a tortilla, and spread two tablespoons of sauce over the surface of the tortilla.  Add a generous spoonful of the chicken mixture in a line down the center of the tortilla, then sprinkle with 1/3 cup cheese. Roll up tortilla and place in a greased 9 x 13-inch baking dish.","Assemble the remaining enchiladas.  Then spread any remaining sauce evenly over the top of the enchiladas, followed by any extra cheese.","Bake uncovered for 20 minutes, until the enchiladas are cooked through and the tortillas are slightly crispy on the outside.  Remove pan from the oven and serve the enchiladas while they’re nice and warm, garnished with lots of toppings.",""], 
         rating:[1,2,3,4]
        },
        {id:3,
         name:"Meat Loaf", 
         description:"[Dinner] Kim's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.simplemost.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fmeatloaf.jpg&f=1&nofb=1",
         ingredients:["eggs (2)","milk (3/4 cup)","onion (1/4 cup)","garlic (2 cloves)","salt (1 teaspoons)","pepper (1/8 teaspoons)","ground beef (1.5 pounds)","bread crumbs (2/3 cup)","parsley (2 tablespoons)","oregano (1 teaspoon)","brown sugar (2 tablespoons)","ketchup (1/4 cup)","worcestershire (optional)"], 
         recipes:["Set Oven to 350","In a medium bowl combine eggs and milk; stir in bread crumbs, onion, parsley, salt, sage, and pepper. Add ground meat; mix lightly. Lightly pat mixture into an 8x4x2-inch loaf pan.","Bake in a 350 degree F oven for 1 to 1-1/4 hours or until internal temperature registers 160 degrees F. Spoon off fat. In a bowl combine ketchup, sugar, and mustard; spread over meat. Bake for 10 minutes more. Let stand for 10 minutes before cutting into eight slices.","Makes 8 servings"], 
         rating:[1,2,3,4]
        },
        {id:4, 
         name:"Waffle Casserole", 
         description:"[Breakfast] [Dinner] Kim's Recipe", 
         link: "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/11/29/54/piclfuIpc.jpg",
         ingredients:["pork sausage (1 pound)","waffles (6 frozen)","cheddar cheese (1/3 cup shredded)","eggs (6)","milk (2 cups)","dry mustard (1 teaspoon)","black pepper (1/8 teaspoon)","maple syrup (optional)"], 
         recipes:["Preheat oven to 350 degrees.","In a large skillet cook sausage until brown, drain off fat.","Arrange 3 of the waffles in a 2 quart rectangular baking dish.","Top with half the sausage and about 1/3 cup of cheese.","Repeat layers.","In a large bowl beat eggs with a fork; stir in milk, mustard and pepper.","Pour over layers in baking dish","Cover and chill for at least 4 hours or up to 24 hours.","Bake dish uncovered for 50-60 minutes or until a knife inserted near center comes out clean.","Sprinkle with remaining cheese.","Let stand for 10 minutes before serving.","If desired, serve with maple syrup."], 
         rating:[1,2,3,4]
        },
        {id:5, 
         name:"Chicken Tacos", 
         description:"[Dinner] Kim's Recipe", 
         link: "https://crockpotladies.com/wp-content/uploads/2016/04/Crock-Pot-Chicken-Ranch-Tacos-5.jpg",
         ingredients:["chicken breasts (1.5 pounds)","chicken broth (2 cups)","taco seasoning (1 pack)","ranch seasoning (1 pack)","torillas (6 flour or corn)","cheese (toppings)","sour cream (toppings)"], 
         recipes:["Place the chicken into the slow cooker. In a bowl, whisk together the chicken broth, ranch seasoning mix, and taco seasoning. Pour the mixture over the chicken.","Cook the chicken on low for about 3 1/2 hours or 1 1/2 hours on high in the slow cooker. If using a pressure cooker (Instant Pot), than cook on high pressure for 25 minutes and do a quick release when done. Remove the chicken and shred with a fork. Place the shredded chicken back into the slow cooker or pressure cooker and let sit for 10-15 minutes before serving.","Use a slotted spoon and spoon the chicken onto a tortilla and top with desired toppings."], 
         rating:[1,2,3,4,5]},
        {id:6, 
         name:"Cane Cookies", 
         description:"[Desert] Oma's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-8syuuC1dV4M%2FUp8ur7e1K6I%2FAAAAAAAAK1U%2FbViA6A0Xtsc%2Fs1600%2Fcandy%2Bcane%2Bcookies-%2Bsimple%2Bliving%2Band%2Beating.jpg&f=1&nofb=1",
         ingredients:["shortening (1/2 cup)","butter (1/2 cup)","eggs (1)","almond extract (1.5 teaspoon)","vanilla (1 teaspoon)","flour (2.5 cups)","salt (teaspoon)"], 
         recipes:["Set Oven to 350","make batter?","separate and Color half of batter","bake 8-12 minutes","once cooled roll them in powdered sugar"], 
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
