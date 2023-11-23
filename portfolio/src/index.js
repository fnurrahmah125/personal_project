// node modules import
import $ from "jquery";
import * as bootstrap from "bootstrap";

// styles import
import "./style/styles.scss";

import initMenuToggle from "./components/navbar/navbar";

$(() => {
  initMenuToggle();
});
