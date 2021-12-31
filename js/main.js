

/*The code below is for the slide show on the first page of 
 of the survey form. The setInterval function is used to time 
 the iteration of the images array and create a timed transition 
 of the images.  
*/ 
const slideContainer = document.querySelector(".slideshow");
const images = [
  "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/4031370/pexels-photo-4031370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/6303645/pexels-photo-6303645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

let count = 0; 

slideContainer.style.background = `url("https://images.pexels.com/photos/1888000/pexels-photo-1888000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat center center/cover`;

setInterval(() => {
  if (count === images.length) {
    count = 0;
  }
 slideContainer.style.background = `url(${images[count]}) no-repeat center center/cover`;
  count++;
}, 6000); 

// The code below is for when the start button is triggered 

/* 
 The code below is for the when the user decides to participate
 in the survey and starts filling up the form. This  feature uses
 the jQuery  library to achieve smooth scrolling for UX.
 */

$(document).ready(function() {
  
     var scrollLink = $('.scroll');
  
     scrollLink.click(function(e) { 

       e.preventDefault();
       
       $(".container-2").removeClass("display");

       $('body,html').animate(
         { 
         scrollTop: $(this.hash).offset().top

         }, 
         800 );
     });
})

//modal show function 

let submit = document.getElementById("submit")
let dismiss = document.getElementById("dismiss-btn")
let container = document.querySelector(".modal-container")


submit.addEventListener("click", ()=> 
{  // checks if all form inputs have valid inputs 
   if($("input:invalid").length === 0)
   { 
   container.classList.add("show");
   
   }
}
) 

dismiss.addEventListener("click",()=>
{
  container.classList.remove("show"); 
  window.location.reload();
}
) 

// solution for handling the 'Enter' key from submitting the form 
 
  function stopFormSubmission(e) 
  {
    let hasForm = false; 

    if (e.key == "Enter") 
    {    
      e.composedPath().forEach((element) => {
        let elementId = element.getAttribute && element.getAttribute("id"); 
        console.log(elementId); 
        if (elementId == "survey-form") hasForm = true;
      });
    } 

    if (hasForm) return true;
    else return false; 

  }  

  document.addEventListener("keypress", (e) => 
  { 
    let result = stopFormSubmission(e);  

    if (result) e.preventDefault(); 
  });  


 

