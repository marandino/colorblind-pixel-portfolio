import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
