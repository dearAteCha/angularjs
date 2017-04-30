var app=angular.module("myApp",[]);
app.controller("myCtrl",function myCtrl($scope){
	$scope.pageTitle="Activity Proposal Requirements";
	$scope.achieved=3;
	var requirements=[
	{"req":"Letter of the organization","ach":false},
	{"req":"Activity Proposal Form","ach":false},
	{"req":"Letter of Invitation","ach":false},
	{"req":"CHED Endorsement","ach":true},
	];
	$scope.requirements=requirements;
	$scope.countAchieved=function(){
		var count=0;
		for(var i in requirements){
			if(requirements[i].ach){
				count++;
			}
		}
		return count;
	} 
	
});