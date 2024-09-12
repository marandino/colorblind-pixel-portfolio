import React from "react";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

// import ErrorPage from "./components/errorPage/error-page";
// import Portfolio from "./components/portfolio/Portfolio";
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App />,
// //     errorElement: <ErrorPage />,
// //   },
// //   {
// //     path: "/portfolio",
// //     element: <Portfolio />,
// //     errorElement: <ErrorPage />,
// //   },
// // ]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
