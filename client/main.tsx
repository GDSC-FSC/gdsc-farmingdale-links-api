import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={
          <>
            <main style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100dvh",
              width: "100dvw",
            }}>
              <h1>404 Not Found 😓</h1>
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50px",
                  width: "100px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  cursor: "pointer",
                  transition: "background-color 0.25s ease",
                }}
              >
                <a href="/">Go ⬅️ Home</a>
              </button>
            </main>
          </>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);

reportWebVitals();
serviceWorker.register();
