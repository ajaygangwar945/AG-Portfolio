import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.onerror = function(msg, url, lineNo, columnNo, error) {
  document.body.innerHTML += `<div style="color:red;font-size:30px;z-index:99999;position:fixed;top:0;left:0;background:black;padding:40px;width:100vw;height:100vh">${error?.stack || msg}</div>`;
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
