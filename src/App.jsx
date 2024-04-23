import React from "react";
import Home from "./Pages/Home/Home";
import RootLayout from "./Component/CommonComponent/RootLayout/RootLayout";
import ShopGridDefault from "./Pages/ShopGridDefault/ShopGridDefault";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/ShopGridDefault" element={<ShopGridDefault />} />
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
};

export default App;
