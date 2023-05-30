
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





//array of photos
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


// let isRunning = false;


// window.addEventListener("mousedown", (e) =>{
//     isRunning = true;

// })

// window.addEventListener("mousemove", (e) => {
//     if(isRunning){
//         interval = setInterval(myAnimationForward, 100);
//     }
    
// })

// window.addEventListener("mouseup", (e) => {
//     if(isRunning){
//         clearInterval(interval);
//     }
//     else{
//         interval = setInterval(myAnimationForward, 100);
//     }
//     isRunning = false; 

// })






//setting my index to 0 (the first frame of the array)
let i = 0;
let interval;
let running = false;

let originalX;
let isLeft;

//IM A GENIUS
function forwardInterval(){
    if(running){
        clearInterval(interval);
    }
   else{
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
        interval = setInterval(myAnimationBackward, 100);
    }
    running = !running;
}


//calling my onclick button as a function
function myAnimationForward(){
    //referring to the images
    //images will go to the next frame on click
    //if statement the frame gets to the last frame, return to the first frame
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


window.addEventListener("mousedown", (e) =>{
//!e.target.classlist.contains ("")
    if(e.target.id != "buttonImage"){
        console.log("mousedown");
        originalX = e.clientX

        window.addEventListener("mousemove", detectAnimationDirection)
    }
    else{

    }

})

//if the x position is less than the original position of x (so on the left side)

function detectAnimationDirection(e){
    console.log(e.clientX);
    if(e.clientX < originalX){
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


window.addEventListener("mouseup", (e) => {
    console.log("mouseup");
    window.removeEventListener("mousemove", detectAnimationDirection)
    clearInterval(interval);
})

































//BUTTON IF ALL ELSE FAILS

// //setting my index to 0 (the first frame of the array)
// let i = 0;


// //calling my onclick button as a function
// function myAnimationForward(){
//     //referring to the images
//     //images will go to the next frame on click
//     //if statement the frame gets to the last frame, return to the first frame
//     document.getElementById("images").src = images[i];

//     if(i < images.length - 1)
//     {
//         i += 1;
//     }
//     else{
//         i = 0;
//     }

// //     if (i == 22){
// //         i = 0;
// //     }
// }

// function myAnimationBackward(){
//     document.getElementById("images").src = images[i];


//     if(i === 0)
//     {
//         i = images.length - 1;
//         console.log(i, "reset")
        
//     }
//     else{
//         i -= 1;
//         console.log(i, "down")
//     }
// }