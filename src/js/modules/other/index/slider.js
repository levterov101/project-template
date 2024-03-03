function sliderInit(){

  const sliderMain = document.querySelector('.prev-slider');
  const slider = sliderMain.querySelector('.slider');
  const sliderList = slider.querySelector('.slider__list');

  const slideItems = sliderList.querySelectorAll('.slider__item');
  const pagination = sliderMain.querySelectorAll('.pagination__item');

  let gapElements = 0;
  let sliderWidth = 0;
  let current = 0;
  let paginationActive = null;

  initVars();
  initBtns();
  initPagClick()
  initResize();

  function initVars(){
    var styles = window.getComputedStyle(sliderList);

    gapElements = parseInt(styles.columnGap);
    sliderWidth = parseInt(styles.width);
    
    console.log(sliderWidth);
  }

  function replacePaginataion(){
    if(paginationActive != null){
      paginationActive.classList.remove('pagination__item--active');
      paginationActive = pagination[current];
      paginationActive.classList.add('pagination__item--active');
    }
    else{
      paginationActive = pagination[current];
      paginationActive.classList.add('pagination__item--active');
    }
  }

  function initBtns(){
    const sliderPrev = slider.querySelector(".slider__prev");
    const sliderNext = slider.querySelector(".slider__next");

    sliderNext.addEventListener("click", ()=>{
      if(current < slideItems.length - 1){
        current++;
        setSliderPos()

        replacePaginataion();
      }
    });
    sliderPrev.addEventListener("click", ()=>{
      if(current > 0){
        current--;
        setSliderPos()

        replacePaginataion();
      }

    });
  }

  function setSliderPos(){
    let offset = (sliderWidth + gapElements)*(-current);
    sliderList.style.transform = `translate(${offset}px, 0px)`;
  }

  function initPagClick(){
    pagination.forEach((el, ind) => {
      el.addEventListener('click', ()=>{
        current = ind;
        setSliderPos();
        replacePaginataion();
      });
    });
  }

  function initResize(){
    window.addEventListener('resize', ()=>{
      initVars();
      setSliderPos();
    });
  }


  setInterval(()=> {
    if(current < slideItems.length - 1){
      current++;
      setSliderPos();

      replacePaginataion();
    }
    else{
      current = 0;
      setSliderPos();

      replacePaginataion();
    }
  }, 6000);
}


export {sliderInit}