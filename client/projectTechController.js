app.controller('projectTechController', ['$scope', function($scope){

console.log("in projectTecController");
// $scope.projectTech = ["kwamejohnson.com", "polyglotty.com", "MorulaMed.com", "kwoding.com"]
// $scope.technologies = ["JavaScript", "Python", "iOS", "SQL", "Angular 1"]

$scope.message = "Where is the bug??";

$scope.projectTech = { projects: ["kwamejohnson.com",
                    "PolyGlotty.com",
                    "MorulaMed.com",
                    "MoviePlanner.com",
                    "kwoding.com",
                    "KlinicalTrials.com",
                    "clearbuoyant.com"],
                  technologies:[
                      ["JavaScript", "Angular 1", "Bootstrap", "JQuery"],
                      ["Full-Stack MEAN/JavaScript (Mongo, Express, NodeJS, Angular)"], ["Python", "Django"],
                      ["JavaScript", "d3", "React"],
                      ["Ruby on Rails"],
                      ["Python", "Web Scraping"],
                      ["C#", "ASP .NET"]
                    ]}

// $scope.projects = ["kwamejohnson.com",
//                     "PolyGlotty.com",
//                     "MorulaMed.com",
//                     "MoviePlanner.com",
//                     "kwoding.com",
//                     "KlinicalTrials.com",
//                     "clearbuoyant.com"]
//
//
// $scope.technologies = [
//     ["JavaScript", "Angular 1", "Bootstrap", "JQuery"],
//     ["Full-Stack MEAN/JavaScript (Mongo, Express, NodeJS, Angular)"], ["Python", "Django"],
//     ["JavaScript", "d3", "React"],
//     ["Ruby on Rails"],
//     ["Python", "Web Scraping"],
//     ["C#", "ASP .NET"]
//   ]
// //
// //
// //
// $scope.projectTech = {
//   "kwamejohnson.com":
//           ["JavaScript", "Angular 1", "Bootstrap", "JQuery"],
//   "PolyGlotty.com":
//           ["Full-Stack JavaScript (Mongo, Express, NodeJS, Angular)"],
//   "MorulaMed.com": ["Python", "Django"],
//     "MoviePlanner.com": ["JavaScript", "d3", "React"],
//   "kwoding.com": ["Ruby on Rails"],
//   "KlinicalTrials.com" : ["Python", "Web Scraping"],
//   "clearbuoyant.com": ["C#", "ASP .NET"]
//
// }
// //
//
}])
