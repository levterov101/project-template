const form = document.querySelector("form.search-form");
const searchInput = document.getElementById("search");
const searchRes = form.querySelector(".search-res");
const searchIcon = form.querySelector(".search-form__icon");
const iconClose = form.querySelector(".search-icon__close");

let blur = null;

const search = function(){
  
  iconClose.addEventListener("click", commonClose);

  searchInput.addEventListener('focus', ()=>{
    if(!searchRes.classList.contains("search-res--active")){
      searchRes.classList.add("search-res--active");
      addBlur();
      document.body.classList.add("body--blocked");

      document.addEventListener('mousedown', closeSearch);
    }
  });

  searchIcon.addEventListener('mousedown', (e) => {
    form.classList.add("search-form--active");
    document.body.classList.add("body--blocked");
    setTimeout(()=> {
      searchInput.focus();
    }, 10);
  })

}

function closeSearch(e){
  if(e.target.classList.contains("search-blur")){
    searchRes.classList.remove("search-res--active");
    closeBlur();
    document.body.classList.remove("body--blocked");
    document.removeEventListener(e.type, closeSearch);
  }
}

function addBlur(){
  let blurDiv = document.createElement("div");
  blurDiv.classList.add("search-blur");

  form.insertBefore(blurDiv, form.firstChild);
  blur = blurDiv;
}

function closeBlur(){
  if(blur != null){
    blur.remove();
  }
}


function commonClose(){
  closeBlur();
  document.body.classList.remove("body--blocked");
  searchRes.classList.remove("search-res--active");
  form.classList.remove("search-form--active");
}


export {search};