import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from 'components/common/state/store.js';
import { useQuery, QueryClientProvider, QueryClient } from 'react-query';



const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
