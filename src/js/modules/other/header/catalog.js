function catalogWorker(){
  initCatalog();
  getActiveCatalog();
}

function initCatalog(){
  const mainCatalogItems = document.querySelectorAll("li.main-catalog__item");
  const subcategoryContainer = document.querySelector("ul.subcategories");
  const subcategories = subcategoryContainer.querySelectorAll(".subcategories__item");


  // Карта списков подкатегорий с ключом родителя
  const subcategoriesMap = new Map();
  subcategories.forEach(el => {
    let categoryId = el.getAttribute("data-category-id");
    let parentId = el.getAttribute("data-parent-id");
    subcategoriesMap.set(parentId, el);
  });

  // Классы активности для элементов
  const activeSubcategoryClass = "subcategory--active";

  // Подкатегория, которая показывается в данный момент
  let activeSubcategory;
  let activeMainCategory;
  

  mainCatalogItems.forEach(element => {
    element.addEventListener("mouseover", (e) => {
      const target = e.target;
      const mainItem = target.closest('li.main-catalog__item');

      const categoryId = mainItem.getAttribute("data-category-id");
      
      if(categoryId !== null){
        const children = subcategoriesMap.get(categoryId);
        if(children !== undefined){

          if(activeSubcategory != null){
            activeMainCategory.classList.remove("main-catalog__item--active");
            activeSubcategory.classList.remove("subcategories__item--active");
            let subcat = activeSubcategory.querySelector("ul.subcategory");
            subcat.classList.remove(activeSubcategoryClass);
          }

          mainItem.classList.add("main-catalog__item--active");
          let subcategoryList = children.querySelector("ul.subcategory");
          children.classList.add("subcategories__item--active");
          subcategoryList.classList.add(activeSubcategoryClass);
          
          activeMainCategory = mainItem;
          activeSubcategory = children;
        }
      }
      
    })
  });
}

function getActiveCatalog(){
  const catalogBtn = document.querySelector("button.catalog__btn");

  const header = document.querySelector("header");
  const catalog = document.querySelector(".catalog");
  const body = document.querySelector("body");

  const bodyBlockClass = "catalog--body-block";
  const headerActiveClass = "header--active";
  const catalogActiveClass = "catalog--active";
  const catalogBtnActiveClass = "catalog__btn--active";

  let isHeaderActive = false;

  if(header.classList.contains(headerActiveClass)){
    isHeaderActive = true;
  }

  const btnsClose = document.querySelectorAll(".catalog__btn-close");
  btnsClose.forEach(el => {
    el.addEventListener('click', ()=>{
      closeOrOpenCatalog();
    });
  });

  catalogBtn.addEventListener("click", ()=>{
    closeOrOpenCatalog();
  })


  // Обработка кнопок закрытия подкаталога
  const btnClose = document.querySelectorAll(".subcategory__btn-close");
  btnClose.forEach(el => {
    el.addEventListener('click', (e)=>{
      const closestSubItem = e.target.closest("li.subcategories__item");
      const subItemList = closestSubItem.querySelector("ul.subcategory");

      closestSubItem.classList.remove("subcategories__item--active");
      subItemList.classList.remove("subcategory--active");
    })
  });


  function closeOrOpenCatalog(){
    if(isHeaderActive){
      catalogBtn.classList.remove(catalogBtnActiveClass);
      catalog.classList.remove(catalogActiveClass);
      header.classList.remove(headerActiveClass);
      body.classList.remove(bodyBlockClass);
      isHeaderActive = false;
    }
    else{
      catalogBtn.classList.toggle(catalogBtnActiveClass);
      header.classList.toggle(headerActiveClass);
      catalog.classList.toggle(catalogActiveClass);
      body.classList.add(bodyBlockClass);
      isHeaderActive = true;
    }
  }
}



export {catalogWorker}