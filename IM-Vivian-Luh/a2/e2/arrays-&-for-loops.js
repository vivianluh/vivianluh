var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";
//an array - a variable that is able to store a variety of different values//
var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log(fruitArray);



for(let fruit of fruitArray ){

    if(fruit === "banana"){
        console.log("Im a banana")

    }

    else{
        console.log(fruit);

    }

}


