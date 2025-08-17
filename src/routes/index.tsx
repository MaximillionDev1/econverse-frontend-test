import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import AppLayout from "../layout/AppLayout";


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
            <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<h2>Pagina nao encontrada Error 404</h2>} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes