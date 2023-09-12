export const slider = function newsSlider(){
  document.addEventListener('DOMContentLoaded', ()=>{
    resizeContainer();

    window.addEventListener('resize', ()=>{
      resizeContainer();
    });
  });
  const resizeContainer = function(){
    const slider = document.querySelector('.slider');
    const sliderList = slider.querySelector('.news__list');
    const newsItems = slider.querySelectorAll('.news__item');
  
    slider.style.height = sliderList.clientHeight + 10 + 'px';
  }
}