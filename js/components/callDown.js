const accordeon = document.querySelector(".header__wrapper");
const accordeonTitles = accordeon.querySelectorAll(".call__input");

for( let accordeonTitle of accordeonTitles) {    
   accordeonTitle.addEventListener("click", function () {      
       const item = accordeonTitle.parentElement.querySelector(".telephone__order");
       if ( item.classList.contains("telephone__order--visible")){    
           item.classList.remove("telephone__order--visible");
           item.style.maxHeight = null;
       }
       else {
           item.classList.add("telephone__order--visible");
           item.style.maxHeight =  item.scrollHeight + "px";
       }
   });
}