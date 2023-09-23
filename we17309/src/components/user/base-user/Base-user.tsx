import Header from "./Header/Header"
import Footer from "../base-user/Footer/Footer"
import { Outlet } from "react-router-dom"
import Product from "../Product/HomePage"
import LienheProduct from "../Lienhe/Lienhe-product"
const BaseUser = () => {
  return (
    <div>
      <Header/>
      <Product/>
      <Outlet />
      {/* <LienheProduct/> */}

      <Footer/>
    </div>
  )
}

export default BaseUser