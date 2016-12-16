app.controller('codingBucketlistController', ['$scope', function($scope){

console.log("in codingBucketlistController");
$scope.bucketlist = {
                      read: ["Clean Code by Robert C. Martin", "Programming Pearls by Jon Bentley", "Cracking the Coding Interview by Gayle Laakmann McDowell", "Soft Skills by John Sonmez", "Zero Bugs and Program Faster by Kate Thompson", "Code Complete by Steve McConnell", "The Pragmatic Programmer by Hunt & Thomas", "Refactoring/xUnit Test Patterns by Gerard Meszaros"],
                      go: ["TechCrunch Disrupt", "Apple Worldwide Developers Conference", "Geekwire Summit", "Web Summit"],
                      do: ["Publish an App to the App Store", "Have my code used by 1 million people", "Have 100,000 unique hits to a website I designed & built"],
                      learn: ["Perl", "Machine Learning"],
                      meet: ["Elon Musk", "Bill Gates", "Jeff Bezos", "Tristan Walker", "Gayle Laakmann McDowell", "Paul Graham"]
                    }
}])
