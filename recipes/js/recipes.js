angular.module('myApp', []).controller('recipeCtrl', function($scope) {
    $scope.myGroceries = ["apples (6)","bananas (10)","onion (1)","bread (2)","milk (1 gallon)","butter (1 pack)","eggs (1 dozen)","lunch meat (rb or turkey)"];
    $scope.addedMeals = [];
    $scope.isList = true;
    
    $scope.meals = [
        {id:01, 
         name:"Taco Tots", 
         description:"[Dinner] Doug's Recipe",
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdishnthekitchen.com%2Fwp-content%2Fuploads%2F2019%2F02%2Ftacocasserole4-1460x973.jpg&f=1&nofb=1",
         ingredients:["ground beef (1 pound)","garlic (2 cloves)","taco seasoning (1 pack)","enchilada sauce (1 19 oz can)","corn (1 can)","green pepper (1)","onion (1)","black beans (1 can)","cheddar cheese (2 bags)","tator tots (1 bag)","salsa (.5 jar)","shredded lettuce (1 bag)","sour cream (optional)","tomato (1 (optional))"], 
         recipes:["Preheat oven to 400 degrees","Brown ground beef, onion and garlic over medium high until no pink remains. Drain any fat.","Stir in taco seasoning, 1/2 cup water, 2/3 cup enchilada sauce, corn, bell pepper and beans. Cook until thickened (about 5 minutes)","Pour beef mixture into a 9×13 pan. Sprinkle with 1 1/2 cups cheese and arrange tater tots on top.","Bake 30 minutes. Combine salsa and remaining 1/3 cup enchilada sauce. Spread over tater tots and top with remaining cheese.","Bake an additional 10 minutes or until cheese is melted and bubbly.","Serve with desired toppings"], 
         rating:[1,2,3,4,5]
        },
        {id:02,
         name:"Enchiladas", 
         description:"[Dinner] Doug's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthestayathomechef.com%2Fwp-content%2Fuploads%2F2019%2F02%2FHomemade-Beef-Enchiladas.jpg&f=1&nofb=1",
         ingredients:["corn tortillas (1 big pack)","onion (1)","enchilada sauce (3 cans)","cheese (2 bags)","chicken strips (1 bag)","black beans (1 can)"], 
         recipes:["Preheat oven to 350°F.","In large sauté pan, heat oil over medium-high heat. Add onion and sauté for 3 minutes, stirring occasionally.  Add diced chicken and green chiles, and season with a generous pinch of salt and pepper.  Sauté the mixture for 6-8 minutes, stirring occasionally, or until the chicken is cooked through.  Add in the beans and stir until evenly combined.  Remove pan from heat and set aside.","To assemble the enchiladas, set up an assembly line including: tortillas, enchilada sauce, chicken mixture, and cheese. Lay out a tortilla, and spread two tablespoons of sauce over the surface of the tortilla.  Add a generous spoonful of the chicken mixture in a line down the center of the tortilla, then sprinkle with 1/3 cup cheese. Roll up tortilla and place in a greased 9 x 13-inch baking dish.","Assemble the remaining enchiladas.  Then spread any remaining sauce evenly over the top of the enchiladas, followed by any extra cheese.","Bake uncovered for 20 minutes, until the enchiladas are cooked through and the tortillas are slightly crispy on the outside.  Remove pan from the oven and serve the enchiladas while they’re nice and warm, garnished with lots of toppings.",""], 
         rating:[1,2,3,4]
        },
        {id:03,
         name:"Meat Loaf", 
         description:"[Dinner] Kim's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.simplemost.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fmeatloaf.jpg&f=1&nofb=1",
         ingredients:["eggs (2)","milk (3/4 cup)","onion (1/4 cup)","garlic (2 cloves)","salt (1 teaspoons)","pepper (1/8 teaspoons)","ground beef (1.5 pounds)","bread crumbs (2/3 cup)","parsley (2 tablespoons)","oregano (1 teaspoon)","brown sugar (2 tablespoons)","ketchup (1/4 cup)","worcestershire (optional)"], 
         recipes:["Set Oven to 350","In a medium bowl combine eggs and milk; stir in bread crumbs, onion, parsley, salt, sage, and pepper. Add ground meat; mix lightly. Lightly pat mixture into an 8x4x2-inch loaf pan.","Bake in a 350 degree F oven for 1 to 1-1/4 hours or until internal temperature registers 160 degrees F. Spoon off fat. In a bowl combine ketchup, sugar, and mustard; spread over meat. Bake for 10 minutes more. Let stand for 10 minutes before cutting into eight slices.","Makes 8 servings"], 
         rating:[1,2,3,4]
        },
        {id:04, 
         name:"Waffle Casserole", 
         description:"[Breakfast] [Dinner] Kim's Recipe", 
         link: "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/11/29/54/piclfuIpc.jpg",
         ingredients:["pork sausage (1 pound)","waffles (6 frozen)","cheddar cheese (1/3 cup shredded)","eggs (6)","milk (2 cups)","dry mustard (1 teaspoon)","black pepper (1/8 teaspoon)","maple syrup (optional)"], 
         recipes:["Preheat oven to 350 degrees.","In a large skillet cook sausage until brown, drain off fat.","Arrange 3 of the waffles in a 2 quart rectangular baking dish.","Top with half the sausage and about 1/3 cup of cheese.","Repeat layers.","In a large bowl beat eggs with a fork; stir in milk, mustard and pepper.","Pour over layers in baking dish","Cover and chill for at least 4 hours or up to 24 hours.","Bake dish uncovered for 50-60 minutes or until a knife inserted near center comes out clean.","Sprinkle with remaining cheese.","Let stand for 10 minutes before serving.","If desired, serve with maple syrup."], 
         rating:[1,2,3,4]
        },
        {id:05, 
         name:"Chicken Tacos", 
         description:"[Dinner] Kim's Recipe", 
         link: "https://crockpotladies.com/wp-content/uploads/2016/04/Crock-Pot-Chicken-Ranch-Tacos-5.jpg",
         ingredients:["chicken breasts (1.5 pounds)","chicken broth (2 cups)","taco seasoning (1 pack)","ranch seasoning (1 pack)","torillas (6 flour or corn)","cheese (toppings)","sour cream (toppings)"], 
         recipes:["Place the chicken into the slow cooker. In a bowl, whisk together the chicken broth, ranch seasoning mix, and taco seasoning. Pour the mixture over the chicken.","Cook the chicken on low for about 3 1/2 hours or 1 1/2 hours on high in the slow cooker. If using a pressure cooker (Instant Pot), than cook on high pressure for 25 minutes and do a quick release when done. Remove the chicken and shred with a fork. Place the shredded chicken back into the slow cooker or pressure cooker and let sit for 10-15 minutes before serving.","Use a slotted spoon and spoon the chicken onto a tortilla and top with desired toppings."], 
         rating:[1,2,3,4,5]
        },
        {id:06, 
         name:"Chicken Spaghetti", 
         description:"[Dinner] Kim's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z6i2NhO0QNQAW3LjIIX-sAHaE7%26pid%3DApi&f=1",
         ingredients:["pasta (8 ounces)","chicken (2 cups)","cream of mushroom (1 can)","cream of chicken (1 can)","rotel (1 can)","cheese (toppings)","sour cream (toppings)"], 
         recipes:["preheat oven to 350 degrees.","boil pasta as package directs and drain. mix all other ingredients, add to cooked pasta and put in a 9x13 baking dish. cover with foil and bake 30 minutes or until hot and bubbly. sprinkle with your choice of cheese and return to oven to melt."], 
         rating:[1,2,3,4]
        },
        {id:07, 
         name:"Lasagna", 
         description:"[Dinner] Dianne's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eUOZvmg2rdczHFdcao1TpAAAAA%26pid%3DApi&f=1",
         ingredients:["tomato paste (12 oz)","tomato paste (6 oz)","onion salt","garlic salt","oregano leaves","sage","cottage cheese (2 lb)","eggs (4)","garlic (1 tsp)","mozzerella shredded cheese (1 cup)","medium cheddar shredded cheese (1 cup)","jack/romano shredded cheese (1 cup)","beef (1-2 lbs)"],
         recipes:["Sauce - add water to the consistency you like - usually 1 can water for each can of paste mix tomato paste 12 oz, tomato paste 6 oz, 1 tsp onion salt, 1 tsp garlic salt, 1 tsp oregano leaves, and 1 tsp sage","Filling - cook meat and mix with 2 lb cottage cheese, 4 eggs, 1 tsp onion salt, 1 tsp garlic salt, 1 tsp oregano leaves, 1 tsp sage, 1 tsp minced garlic, 3 cups shredded cheese.","Layers - tomato sauce in bottom of 9x13 pan - enough so you can turn pans on side and tomato sauce cover it as well noodles 1/2 cottage cheese mixture - spread out noodles 1/2 cottage cheese mixture - spread out noodles tomato sauce - shake pan so it is flat and some sauce runs down the sides cheese bake 375 degrees 1 hour"], 
         rating:[1,2,3,4,5]
        },
        {id:08, 
         name:"Tater Tot Casserole", 
         description:"[Dinner] Kim's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdz2k5jx87b7zc.cloudfront.net%2Fwp-content%2Fuploads%2F2014%2F12%2F15175632%2FJohn-Wayne-Tater-Tot-Casserole.jpg&f=1&nofb=1",
         ingredients:["ground beef (1 pound)","onion (1/2 chopped)","cream of chicken soup (10.5 oz can)","tator tots (16oz bag)","cheddar shredded cheese (1 cup)","salt","pepper"],
         recipes:["Preheat oven to 375 degrees.","Brown ground beef. season with salt & pepper.","In a casserole dish, combine ground beef mixture and cream soup.","Top mixture with tater tots.","Bake , uncovered, for 30-40 minutes till bubbly and Tots are golden brown.","Remove from oven & top with cheese, return to oven until melted.","Enjoy!"], 
         rating:[1,2,3,4,5]
        },
        {id:09, 
         name:"Garlic Potatoes", 
         description:"[Dinner] Kim's Recipe",
         link:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a07_roasted_potatoes.jpg.rend.hgtvcom.826.620.suffix/1446840363593.jpeg",
         ingredients:["red potatoes (3 pounds)","olive oil (1/4 cup)","salt (1.5 teaspoons)","pepper (1 teaspoon)","garlic (6 gloves)","parsely (2 tablespoons)"],
         recipes:["Preheat the oven to 400 degrees F.","Cut the potatoes in half or quarters and place in a bowl with the olive oil, salt, pepper, and garlic; toss until the potatoes are well coated. Transfer the potatoes to a sheet pan and spread out into 1 layer. Roast in the oven for 45 minutes to 1 hour or until browned and crisp. Flip twice with a spatula during cooking in order to ensure even browning.","Remove the potatoes from the oven, toss with parsley, season to taste, and serve hot."], 
         rating:[1,2,3,4]
        },
        {id:10, 
         name:"Hobo Burgers", 
         description:"[Dinner] Kim's Recipe",
         link:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.rebelmouse.io%2FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xODE0ODAxNi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYyNTY4NjgyMH0.JrMf4aHl_C5jQRSvKld7nLhjh0Us61vsWWHfN76bi1g%2Fimg.jpg%3Fwidth%3D1200%26coordinates%3D0%252C380%252C0%252C380%26height%3D600&f=1&nofb=1",
         ingredients:["Hamburger (1 pound)","baby potatoes (4)","eggs (1)","baby carrots (1 pound bag)","cheese (4 sliced)","galic powder (1/2 tsp)","salt (1 1/2 tsp)","pepper (1/4 tsp)","foil"],
         recipes:["Preheat grill to 350 degrees.","In a bowl combine the hamburger, egg, seasoning salt and garlic powder. Form into four patties, set aside.","In a large bowl combine the remaining ingredients except cheese slices. Mix until combined.","Spray four 12''by 18'' pieces of foil with nonstick spray. Place 1/4 of the vegetables in the center of the foil. Top with 1 beef patty. Seal packets and place beef side up on the grill. ","Grill for 35-45 minutes or until potatoes and carrots are tender and the ground beef reaches 160 degrees F. I flipped mine over during the last 20 minutes of cooking.","When the packets are done open the top, hamburger patty facing up, and add a piece of cheese. Close grill cover and grill 2-3 minutes or until cheese is melted."], 
         rating:[1,2,3,4,5]
        },
        {id:12, 
         name:"BBQ Chicken", 
         description:"[Dinner] Kim's Recipe",
         link:"https://i2.wp.com/thefrugalgirls.com/wp-content/uploads/2015/07/Crockpot-BBQ-Shredded-Chicken.jpg?w=597&ssl=1",
         ingredients:["boneless chicken (3 pounds)","sweet rays bbq sauce (18 oz)","brown sugar (1/2 cup)"],
         recipes:["Cook chicken in crockpot on HIGH for 3 hours or LOW for 6 hours covered","After 3 hours on HIGH or 6 hours on LOW, drain juices from crockpot.","Remove chicken and shred with 2 forks, then transfer back to crockpot.","In bowl, mix together entire contents of BBQ sauce bottle and brown sugar.","Pour sauce mixture over the chicken, stir well, and cook on high for 30 more minutes covered, or until done. Serve on buns and ENJOY!"], 
         rating:[1,2,3,4,5]
        },
        {id:13, 
         name:"Burritos", 
         description:"[Dinner] Kim's Recipe",
         link:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-D3bBux0kVkM%2FVPr2ab3fDTI%2FAAAAAAAAB0Y%2FFgVduB249AI%2Fs1600%2FFrenchs_Cheeseburger_Burrito.jpg&f=1&nofb=1",
         ingredients:["tortillas (5)","ground beef (1 pound)","taco seasoning","chili beans (16 oz can)","pinto beans (16 oz can)","rice (1 cup)","cheddar cheese (1 bag)","shredded lettuce (1 bag)","rotel (1 can)","taco sauce","sour cream"],
         recipes:["Cook rice","Cook beef and add taco seasoning","Warm Pinto and Chili beans in pot","Add rice, beef, beans and some cheese together in two tortillas","Cover two with cheese and microwave for 2 minutes","serve with lettuce, rotel and sour cream"], 
         rating:[1,2,3,4]
        },
        {id:14, 
         name:"Grilled Cheese", 
         description:"[Dinner] Kim's Recipe",
         link:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fshutterstock_645742051-1024x683.jpg&f=1&nofb=1",
         ingredients:["bread (12 slices)","sliced cheese (10)","butter","tomatoes (1 optional)","tomato soup (1 can)"],
         recipes:["Assemble sandwich with cheese slice (one or two) sliced tomato (optional)","Butter outside of each slice of bread","Cook for 90 seconds on each side on stove med-high heat","Mix and warm soup","Serve and enjoy"], 
         rating:[1,2,3,4]
        },
        {id:15, 
         name:"Cane Cookies", 
         description:"[Dessert] Oma's Recipe", 
         link: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-8syuuC1dV4M%2FUp8ur7e1K6I%2FAAAAAAAAK1U%2FbViA6A0Xtsc%2Fs1600%2Fcandy%2Bcane%2Bcookies-%2Bsimple%2Bliving%2Band%2Beating.jpg&f=1&nofb=1",
         ingredients:["shortening (1/2 cup)","butter (1/2 cup)","eggs (1)","almond extract (1.5 teaspoon)","vanilla (1 teaspoon)","flour (2.5 cups)","salt (teaspoon)"], 
         recipes:["Set Oven to 350","make batter?","separate and Color half of batter","bake 8-12 minutes","once cooled roll them in powdered sugar"], 
         rating:[1,2,3,4,5]
        },
        {id:16, 
            name:"Brie Bites with Cranberry", 
            description:"[Dessert] Kim's Recipe", 
            link: "https://www.wellplated.com/wp-content/uploads/2019/12/Baked-Brie-Bites-268x268.jpg",
            ingredients:["Frozen puff pastry (2 sheets)","Brie cheese (8 ounces)","Homemade Cranberry Sauce (1 cup)","flaky sea salt (1 teaspoon)","Chopped Pecans (1/2 cup)","Fresh Rosemary (4 springs)"], 
            recipes:["Position oven racks in the upper and lower thirds of the oven and preheat the oven to 375 degrees F. Place the Brie in the freezer for 15 minutes to firm up. VERY generously coat 2, 24-cup mini muffin pans with nonstick spray (if you only have 1 pan or if you have 2, 12-cups pans, make the Brie bites in batches).","Unroll 1 sheet puff pastry on a lightly floured work surface (leave the second sheet in the refrigerator until you are ready to use it). Roll into a 10 x 14-inch rectangle. Cut the sheet lengthwise into 4 even strips. Cut crosswise into 6 even strips. You will have 24 squares total (each square will be about 2 ½ inches on each side). Gently separate the squares and press them into the mini muffin tins to create a puff pastry cup. With the tines of a fork, prick the bottom of each puff pastry in 2 to 3 places.","Cut the piece of Brie in half, then place 1 half back in the freezer. Dice the remaining Brie into 24 pieces (they will be between ¾ and 1/2-inch on each side). Place one piece of Brie in the center of each mini muffin cup. Top each piece of Brie with 1 teaspoon cranberry sauce. Sprinkle with ½ teaspoon salt, then half of the chopped pecans. Place in the refrigerator. Repeat with the second sheet of puff pastry, second half of Brie, and the remaining salt and pecans.","Place each muffin pan on a rimmed baking sheet to catch any cheese or cranberry that bubbles over. Bake the pans on the upper and lower thirds of the oven for 18 to 20 minutes, until the pastry is puffed and the corners are golden brown, switching the pans’ positions on the upper and lower racks once halfway through. Let cool in the pans for 3 minutes. If any of the Brie or cranberry has bubbled out, use a fork to scoot it back into the center of the bites (no one will know!).","Gently transfer the bites to a serving plate (I find a fork works well to transfer them). Garnish each with a small piece of fresh rosemary. Enjoy hot or at room temperature"], 
            rating:[1,2,3,4,5]
        },
        {id:17, 
            name:"Easy Cranberry Brie Bites", 
            description:"[Dessert] Kim's Recipe", 
            link: "https://www.thecountrycook.net/wp-content/uploads/2017/12/square-Cranberry-Brie-Bites-200x200.jpg",
            ingredients:["all-purpose flour","1 (8 oz) tube crescent dough","1 (8 oz) wheel of brie cheese","1 cup whole berry cranberry sauce","fresh rosemary sprigs"], 
            recipes:["Preheat oven to 375°f degrees. Spray a mini muffin tin with cooking spray. Spread a little flour out onto your counter. Then roll out crescent roll dough and pinch seams together. Cut crescent roll dough into 24 equal-sized squares. Place squares into muffin tin slots.","Cut brie into small pieces and place inside the crescent dough squares. Top with a generous spoonful of cranberry sauce, and a little sprig of rosemary.","Bake until the crescent dough is a light golden brown (about 15 minutes). Then serve warm!"], 
            rating:[1,2,3,4,5]
           },
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
