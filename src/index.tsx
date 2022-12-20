import React from 'react';
import { Provider } from 'react-redux';
import  App  from './App';
import { createRoot } from 'react-dom/client';
import store from '../src/store/store';



createRoot(document.getElementById('root')!).render(
<Provider store={store}>
<React.StrictMode>
    <App />
    </React.StrictMode>
</Provider>
);
