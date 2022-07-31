import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './styles.css';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SSRProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <SSRProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SSRProvider>
  </React.StrictMode>,
);
