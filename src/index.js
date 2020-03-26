import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import reactDOM from "react-dom";

import App from "./Components/App";

reactDOM.render(<App />, document.getElementById("root"));