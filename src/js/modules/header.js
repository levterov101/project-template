import { search } from "./other/header/search.js";
import {infoBlockInit, infoPhonesInit} from "./other/header/info.js";

const header = function(){
  search();
  infoBlockInit();
  infoPhonesInit();
}

export { header };