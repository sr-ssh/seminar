import { Login } from "../pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
