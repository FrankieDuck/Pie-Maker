import React from "react";
import Header from "./Header";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CustomPage from "./Pages/Custom/CustomPage";
import AboutPage from "./Pages/About";
import MenuPage from "./Pages/Menu/MenuPage";
import CheckoutPage from "./Pages/Checkout/Checkout";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      autoHideDuration={2000}
      variant="success"
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/custom" element={<CustomPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </SnackbarProvider>
  );
}

export default App;
