// build the nav
// getting parent of nav to add links dynamically
const navBarList = document.getElementById("navbar__list");
//to get the length of array to use it with loop condition 
const sections = document.querySelectorAll("section");

//link the nav to the content(sections)
function createNavItems(){
  for(let i = 1; i <= sections.length; i++){
      let li = document.createElement("li");
      li.innerHTML=`<a href="#section${i}" class="menu__link">section${i}</a>`;
      navBarList.appendChild(li);
    
      
}
}
function inViewport(elem){
  const sectionPosition = elem.getBoundingClientRect();
  return(sectionPosition.top >= 0);
}

//active section
function activeClass(){
  //const sections = document.querySelectorAll("section");
  for(const section of sections){
    if(inViewport(section)){
      if(!section.classList.contains("your-active-class")){
        section.classList.add("your-active-class");}}
        else{
          section.classList.remove("your-active-class");
        }
      }
    }
  
    //build the nav
    createNavItems();

    //Add class"active" to section when near top of viewport
    document.addEventListener("scroll", activeClass());
