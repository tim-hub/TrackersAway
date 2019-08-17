import React from "react";
import ReactDOM from "react-dom";
import "bulma";
import "./main.scss";
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from '../store/store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("App")
);
