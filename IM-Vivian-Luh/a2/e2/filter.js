/* we will cover this function in detail in class but it'll handle everything you need to filter your recipes */

// I've given it a name related to its function - I've also declared two parameters, filterBy will be one of the classes 
// attached to the elements that you want to display, buttonClicked will be a reference to which button was clicked
function filterCategory(filterBy, buttonClicked){
  // here we're finding an array (like a list) made from all of the elements on the page that have the class 
  // RecipeBox attached to it (all of our recipes) and then we're assigning that array to the name itemsToFilter
  let itemsToFilter = Array.from(document.getElementsByClassName("RecipeBox"));
  // next we're running a for loop on the array, so it's going to run some code on each element in the list
  // we're also assigning a variable name to the item on the list we're looking at for each loop, in this case listItem
  for(let listItem of itemsToFilter){
    // for each element, reffered to now by the variable name listItem we're looking to see if it has a particular class 
    // attached to it - the class we're looking for is our function's parameter filterBy. if it does have that class then 
    // we're setting its display to block, otherwise if it doesn't have the class we're looking for we're going to hide it 
    // by setting the display to none
    if(listItem.classList.contains(filterBy)){
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  }

  // here's some more advanced code for adding feedback to our filter itself, but as you can see it works in a similar way to above
  // again getting an array of elements, this time using the FilterButtons class
  let filterButtonsArray = Array.from(document.getElementsByClassName("FilterButton"));
  // using a for loop but this time on all of our filter buttons
  for(let filterButton of filterButtonsArray){
    // again we're using an if statement, this time checking if it was the button we just clicked
    if(filterButton === buttonClicked){
      // here is where you might change the style of the button clicked - instead of directly changing the style we're adding a new class
      filterButton.classList.add("SelectedFilter");
    } else {
      // and here we're removing this class from all other buttons so only the one you clicked has it applied
      filterButton.classList.remove("SelectedFilter");
    }
  }

}

// Add active class to the current button (highlight it)
// URL to tutorial I referred to: https://stackoverflow.com/questions/68347721/how-do-i-keep-a-clicked-navigation-button-highlighted-in-css
//Something I  thought the filter section lacked was when a user pressed on a particular category the button was not highlighted
//and so the user did not know confidently know which filter was being applied to the information. Especially after scrolling down 
//and back up to use another filter, the user would not have known which of the filters were already used. 

//To ensure a filter button was highlighted once clicked I referred to a tutorial to achieve this interactivity. 


let elements = document.querySelectorAll('.FilterButton') //defined variable
//will select all the css/html elements with the class 'filterButton'

elements.forEach(el => { 
  el.addEventListener('click', () => { //sets up a function that will be called whenever 'click' is enacted
    elements.forEach(el => el.classList.remove('active')) //when clicked the whole class list will remove the existing css style
    el.classList.add('active') //and add the active css styling to the FilterButton classes.
  })})








// Back to top button 
//URL LINK TO TUTORIAL: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


let mybutton = document.getElementById("myBtn"); //defined variable which will refer to the html id of 'myBtn'

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // if the user scrolls down 20px from the top of the document
    mybutton.style.display = "block"; //show the button
  } else {
    mybutton.style.display = "none"; //otherwise BE GONE button
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}