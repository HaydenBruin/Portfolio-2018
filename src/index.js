import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// LOAD SERVICE WORKERS
import registerServiceWorker from './registerServiceWorker';

// LOAD COMPONENTS
import App from './components/app';

// LOAD STYLES
import "./scss/_load.scss";

// ROOT REDUCER
import rootReducer from "./reducers";

let defaultState = {
    projects: []
}

const loadDefaultState = async () => {
    const response = await fetch('/data/projects.json');
    const projects = await response.json();
    defaultState.projects = projects;

    // RENDER
    ReactDOM.render(
        <Provider store={createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                <App />
            </BrowserRouter>
        </Provider>,
    document.getElementById('root'));

    registerServiceWorker();
}
loadDefaultState();