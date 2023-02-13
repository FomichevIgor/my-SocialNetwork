import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App

                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                    
                   

                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderTree(store.getState());
store.subscribe(()=>{
    let state=
    rerenderTree(store.getState());
});


