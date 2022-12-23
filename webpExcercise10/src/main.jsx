import "bulma/css/bulma.css";
import "./style.css";

import { createRoot } from "react-dom";
import App from "./App";


createRoot(document.querySelector("#content")).render(<App />);
//createRoot(document.querySelector("#content2")).render(<Box />);
