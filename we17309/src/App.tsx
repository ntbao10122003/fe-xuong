import LienheProduct from "./components/user/Lienhe/Lienhe-product"
import NewProduct from "./components/user/Product/NewProduct"
import BaseUser from "./components/user/base-user/Base-user"
import Detail from "./components/user/detail/Detail"
import { BrowserRouter , Route , Router , Routes } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseUser/>} />
        <Route path="/lienhe" element={<LienheProduct/>} />
        <Route path="/Detail" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
