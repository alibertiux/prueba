import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from "./components/Pokemon";
import { Detail } from "./components/Detail.jsx";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Pokemon />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
        </BrowserRouter>
    );
};

export default App;