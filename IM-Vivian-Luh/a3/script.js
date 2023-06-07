
//INFORMATION BUTTON

/* find the modal */
let modal = document.getElementById("modalDialog");
/* find the button and add an eventlister */
let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});





//the use of arrays is vital in ensuring the animation (frame-by-frame) plays out in a orderly fashion, 
//these frames were numbered in accordance to the order it would play out
//by storing multiple values in this array, the entire animation can be called in a single variable.
let images = [
    "frames/1.png",
    "frames/2.png",
    "frames/3.png",
    "frames/4.png",
    "frames/5.png",
    "frames/6.png",
    "frames/7.png",
    "frames/8.png",
    "frames/9.png",
    "frames/10.png",
    "frames/11.png",
    "frames/12.png",
    "frames/13.png",
    "frames/14.png",
    "frames/15.png",
    "frames/16.png",
    "frames/17.png",
    "frames/18.png",
    "frames/19.png",
    "frames/20.png",
    "frames/21.png",
    "frames/22.png",
    "frames/23.png",
];



//the variables I have defined


let i = 0; //setting my index to 0 (the first frame of the array)
let interval;
let running = false;

let originalX;
let isLeft;


//The first step was to call for the array
//this was achieved through the use of two functions called through an onclick event
//the myAnimationForward function ensured the image will go to the next image of the array on click
//the myAnimationBackward function ensured the image will go the previous image of the array on click

function myAnimationForward(){
    //1. ensure the array named "images" is called
    //2. images will go to the next frame utilising an if statement
    //3. if the array gets to the last frame on click, return to the first frame (i =0)
    document.getElementById("images").src = images[i];
    if(i < images.length - 1)
    {
        i += 1;
    }
    else{
        i = 0;
    }
}

function myAnimationBackward(){
    document.getElementById("images").src = images[i];
    //1. ensure the array named "images" is called
    //2. if the expected output is true, images will be to the previous image of the array
    //3. if the array gets to the first frame onclick, return to the last frame
    if(i === 0)
    {
        i = images.length - 1;
        // console.log(i, "reset")
        
    }
    else{
        i -= 1;
        // console.log(i, "down")
    }
}

//The second step was to get the array moving in an animated fashion, to do this the set Interval function was utilised 
//two functions were created;
//A forwardInterval function was created to allow the array to move forward (eg. frame 1 counting up to frame 23)
//A backwardInterval function was created to allow the array to move backward (eg. frame 23 counting down to frame 1)

//these functions are to be called under any sought of event, in the first test, the functions were called on an onclick event, and
function forwardInterval(){
    //and if statement was used to determine when the array would be executed and when it would stop
    if(running){

        //clear the execution if running is false
        clearInterval(interval);
    }
   else{
    //setInterval allowed the array to be executed again and again, calling a specific function, and some sought of delay, 
    //the function called are the myAnimationForward to ensure it runs forwards
    //in this case 100 milliseconds.
    interval = setInterval(myAnimationForward, 100);
   }
   //running equals to not (! means no) running
   running = !running;

}


function backwardInterval(){
    if(running){
        clearInterval(interval);
    }
    else{
            //the function called are the myAnimationBackward to ensure it runs backwards
        interval = setInterval(myAnimationBackward, 100);
    }
    running = !running;
}



//The last step was to call the functions through the mouse events as supposed to any onclick/button events
//the mousedown event was called to my browser

//if the user's mouse button is down/trackpad is pressed down, read the horizontal coordinates of the user's mouse
//once read the user's mouse x position, detect and play the animation when the user moves the mouse
window.addEventListener("mousedown", (e) =>{
//!e.target.classlist.contains ("")
    if(e.target.id != "buttonImage"){
        console.log("mousedown");
        originalX = e.clientX


        //the mousemove event was called in the mousedown event to ensure the user has to click and drag
        //this ensures that the animation wouldn't continuously play as the mousemoved without having to click down first
        //gives the user agency to start and stop the animation whenever they wished.
        window.addEventListener("mousemove", detectAnimationDirection)
    }
    else{

    }

})

//if the x position is less than the original position of x (so on the left side)
//function detectAnimationDirection aimed to ensure only the specific setInterval (forward/backward) were played in accordance to 
//wear the mouse was positioned on the browser. 
function detectAnimationDirection(e){
    console.log(e.clientX);
    if(e.clientX < originalX){
        //an if statement for a boolean variable to state if the x position of the user mouse is less than the original x position 
        //call the myAnimationBackward function within setInterval
        //otherwise call the myAnimationForward function within setInterval


        //left side 
        if(!isLeft){
            clearInterval(interval);
            interval = setInterval(myAnimationBackward, 100);  
        }
        isLeft = true;

    }
    else{
        //right side
        if(isLeft){
            clearInterval(interval);
            interval = setInterval(myAnimationForward, 100);
        }
        isLeft = false;

    }
}

//Finally, add a mouseup event which will terminate any animation detection and clear any of the setInterval animations
//once the user has lifted the mouse up.
window.addEventListener("mouseup", (e) => {
    console.log("mouseup");
    window.removeEventListener("mousemove", detectAnimationDirection)
    clearInterval(interval);
})































