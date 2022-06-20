import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import REPL from './REPL';

const SQLFrames = React.lazy(async () => {
  const { default: sf } = await import('./SQLFrames');
  const sfc = await sf();
  return { default: sfc };
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <SQLFrames>
        <App /> {/* App is within SQLFrames to ensure dependencies are loaded */}
        <hr/>
        <REPL />
      </SQLFrames>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
