angular.module('myApp', []).controller('subjectCtrl', function($scope) {
    $scope.subjects = [
        {name:'Bingo', instructor:'Doug', title:'Online Bingo Cards', description:'Online Bingo Cards', pic: "images/bingo.png", url:"/bingo"},
        {name:'Trivia', instructor:'Doug', title:'Trivia App for Social Hour', description:'Yeah for Social Hour', url:"/trivia"},
        {name:'Recipes', instructor:'Ray', title:'2Succeed Home Cooked Recipes', description:'Yeah for Recipes', url:"/recipes"}
    ];

    $scope.goto = function(url){
        console.log("working "+ url);
        location.href = url;
    };
});

