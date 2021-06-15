angular.module('myApp', []).controller('subjectCtrl', function($scope) {
    $scope.subjects = [
        {name:'Bingo', instructor:'Doug', title:'Online Bingo Cards', description:'Online Bingo Cards', url:"/bingo"},
        {name:'Trivia', instructor:'Doug', title:'Trivia App for Social Hour', description:'Yeah Recipes', url:"/recipes"},
        {name:'Recipes', instructor:'Ray', title:'2Succeed Home Cooked Recipes', description:'Ingredients', url:"/recipes"},
    ];
});


