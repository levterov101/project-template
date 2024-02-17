import { search } from "./other/header/search.js";
import {infoBlockInit, infoPhonesInit} from "./other/header/info.js";
import {catalogWorker} from "./other/header/catalog.js"

const header = function(){
  search();
  infoBlockInit();
  infoPhonesInit();
  catalogWorker();
}

export { header };