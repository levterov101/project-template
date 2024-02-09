function infoBlockInit(){
  infoNavInit();
}

function infoNavInit(){
  const infoBlockActive = "info-item__block--active";
  const infoListActive = "info-item__list--active";

  const infoNavItems = document.querySelectorAll("div.info-item__block");
  infoNavItems.forEach(el => {
    el.addEventListener("mouseup", (e)=>{
      let clickedBlock = e.target.closest(".info-item__block");
      let parent = clickedBlock.closest("div.info-item");
      let list = parent.querySelector("ul.info-item__list");

      let firstAdd = false;

      var closeNav = function(e){
        let closest = e.target.closest(".info-item__list");
        if(closest === null){
          if(!firstAdd){
            clickedBlock.classList.remove(infoBlockActive);
            list.classList.remove(infoListActive);
            document.removeEventListener(e.type, closeNav);
          }
          else{
            firstAdd = false;
          }
        }
      };

      if(clickedBlock.classList.contains(infoBlockActive)){

      }
      else{
        document.addEventListener("mouseup", closeNav);
        clickedBlock.classList.add(infoBlockActive);
        list.classList.add(infoListActive);
        firstAdd = true;
      };

    });
  });
}

function infoPhonesInit(){
  const infoPhoneActive = "phones__current--active";
  const infoPhoneListActive = "phones__list--active";

  const phoneCurrent = document.querySelector(".phones__current");
    phoneCurrent.addEventListener("mouseup", (e)=>{
    var container = e.target.closest(".phones");
    var current = container.querySelector(".phones__current");
    var list = container.querySelector(".phones__list");

    let firstAdd = false;


    var closeNav = function(e){
      let closest = e.target.closest(".info-item__list");
      if(closest === null){
        if(!firstAdd){
          current.classList.remove(infoPhoneActive);
          list.classList.remove(infoPhoneListActive);
          document.removeEventListener(e.type, closeNav);
        }
        else{
          firstAdd = false;
        }
      }
    };
    

    if(current.classList.contains(infoPhoneActive)){

    }
    else{
      document.addEventListener("mouseup", closeNav);
        current.classList.add(infoPhoneActive);
        list.classList.add(infoPhoneListActive);
        firstAdd = true;
    }
  });
}


export {infoBlockInit, infoPhonesInit}