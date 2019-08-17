import React from "react";
import ReactDOM from "react-dom";
import "bulma";
import "./main.scss";
import { App } from "./App";
import {store, CONSTANTS, toggleLoading} from '../store';

ReactDOM.render(
    <App />,
    document.getElementById("App")
);
