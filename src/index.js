import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './reducers';
import {Row, Col} from "antd";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Row justify="center" align="top">
                <Col xs={20} sm={16} md={12} lg={8}>
                    <App/>
                </Col>
            </Row>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
