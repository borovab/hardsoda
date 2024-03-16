import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import '../src/scss/General.scss';
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Outlet/>
    </BrowserRouter>
  );
}

export default App;
