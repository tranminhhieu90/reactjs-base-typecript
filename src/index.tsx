import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import './i18n';
import { Suspense } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Suspense fallback="...is loading">
                <App />
            </Suspense>
        </GlobalStyles>
    </React.StrictMode>,
);
