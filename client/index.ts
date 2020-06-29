import React, { createElement } from "react";
import ReactDOM, { render } from "react-dom";

import App from "./src/App";

// import "react-toastify/dist/ReactToastify.min.css";

const ROOT: HTMLDivElement = document.querySelector(`#ROOT`);

if (process.env.NODE_ENV !== `production`) {
  import(`react-axe`).then((axe) => {
    axe.default(React, ReactDOM, 1000);
    return render(createElement(App), ROOT);
  });
} else render(createElement(App), ROOT);
