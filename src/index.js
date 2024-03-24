import React from "react";
import App from "./App"
import { ContextProvider } from "./context/Context";
import ReactDOM from 'react-dom/client';


// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
</React.StrictMode>
);