// node modules import
import $ from "jquery";
import * as bootstrap from "bootstrap";

// styles import
import "./style/main.scss";

import initMenuToggle from "./components/navbar/navbar";

$(() => {
  initMenuToggle();
});
