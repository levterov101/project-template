import { search } from "./other/header/search.js";
import {infoBlockInit} from "./other/header/info.js";

const header = function(){
  search();
  infoBlockInit();
}

export { header };