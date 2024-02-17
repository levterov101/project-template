function catalogWorker(){
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


export {catalogWorker}