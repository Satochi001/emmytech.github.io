const toggleBtn =  document.querySelector(".hambugber");
const mobileNav = document.querySelector(".mobile-nav");
const overlayOut = document.querySelector(".overlay");
const navScroll = document.querySelector('.nav-header');

function hideContent() {
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        if (tabContents[i].id === 'upwork') {
            tabContents[i].style.display = "block";
        } else {
            tabContents[i].style.display = "none";
        }
    }
}

//function that handle the scroll behavior 

function openTab(event, upwork) {
    var tabContent = document.getElementById(upwork);
    tabContent.style.display = "block";

    // Hide 'upwork' when another element has been clicked
    var contentUpwork = document.getElementById('upwork');
    var  contentHashnode  = document.getElementById('hashnode');
    var contentInten = document.getElementById('internship');
    if (upwork !== 'upwork' ) {
        contentUpwork.style.display = "none";
    }
  
    if(upwork !== "hashnode"){
            contentHashnode.style.display="none"
        }
    
    
    if(upwork !== "internship"){
        contentInten.style.display="none"

    }
}

// Call hideContent function to display default content ('upwork')
hideContent();


//nav bar scroll responsive 
function adjustNav(){
    if(window.scrollY === 0){
        navScroll.style.boxShadow = "none";
    } else {
        navScroll.style.boxShadow = "";

    }
    
}

document.addEventListener("DOMContentLoaded", ()=>{
    adjustNav();

window.addEventListener('scroll', adjustNav);

});



function scrollUp(){
    navScroll.classList.add("hide-nav");
  }
  function scrollDwn(){
      navScroll.classList.remove("hide-nav");
  
  }
  
  var lastScrollTop = 0;

  function scrollHandler() {
      var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          scrollUp();
      } else {
          // Scrolling up or at the top
          scrollDwn();
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  }
  
  document.addEventListener('scroll', scrollHandler);
  


// display more additional project
let isShowmore = false;
const showMore = document.querySelector('.additional-link');
var dItem = document.querySelectorAll('.show-more');

showMore.addEventListener("click",()=>{
    if(!isShowmore){
        dItem.forEach(Element=>{
            Element.style.display = "block"
        })
        showMore.textContent= "show less"
        isShowmore = true
    }else{
        dItem.forEach(Element=>{
            Element.style.display = "none"
        })
        showMore.textContent= "show more"
        isShowmore = false
    }
})

 
toggleBtn.addEventListener('click', ()=>{

 toggleBtn.classList.toggle("is-active");       
 mobileNav.classList.toggle("is-active"); 
 overlayOut.classList.toggle("is-active");
 document.body.classList.toggle("is-active");
});