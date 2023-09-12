export function header(){
  const aboutItems = document.querySelectorAll(".about__item");

  aboutItems.forEach((item) => {
    item.addEventListener("click", () => {
      if(item.classList.contains('about__item--list')){
        
        const sublist = item.querySelector(".about__sub-list");
        sublist.classList.toggle('about__sub-list--active');
        
        document.addEventListener('mousedown', pageClickHandler);

        function pageClickHandler(e){
          if(e.target.closest('.about__sub-list') === null && e.target.closest(".about__item") === null){
            sublist.classList.remove('about__sub-list--active');
            document.removeEventListener('mousedown', pageClickHandler);
          }
          else{
            if(e.target.closest(".about__item") !== null){
              if(e.target.closest(".about__item") === item){
                document.removeEventListener('mousedown', pageClickHandler);
              }
              else{
                sublist.classList.remove('about__sub-list--active');
                document.removeEventListener('mousedown', pageClickHandler);
              }
            }
          }
        };
      }
    });
  });


  /* Catalog */

  const catalogBtn = document.querySelector("button.catalog-btn");
  const header = document.querySelector("header");
  const headerCatalog = document.querySelector("div.header__catalog");
  const headerContainer = document.querySelector(".header-container");
  const headerWrapp = document.querySelector(".header__top-wrapp");

  catalogBtn.addEventListener("click", ()=>{
    
    if(document.body.hasAttribute("style")){
      document.body.removeAttribute("style");
      headerWrapp.removeAttribute("style");
    }else{
      let scroll = scrollWidth();
      document.body.style.paddingTop =  header.clientHeight + "px";
      
      if(document.body.scrollHeight - window.innerHeight > 1){
        document.body.style.paddingRight = scroll + "px";
        headerWrapp.style.paddingRight = scroll + "px";
      }
    }

    catalogBtn.classList.toggle("catalog-btn--active");
    header.classList.toggle("header--active");
    headerCatalog.classList.toggle("header__catalog--active");
    headerContainer.classList.toggle("header-container--active");
    document.body.classList.toggle("body--hidden");
  });


  function scrollWidth(){
    var scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";
    scrollDiv.style.left = "-9999px";
    document.body.appendChild(scrollDiv);

    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
  }
}