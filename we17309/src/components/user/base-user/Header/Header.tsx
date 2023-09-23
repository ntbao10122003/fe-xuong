const Header = () => {
  return (
    <>
        <div className="container-nav">
        <div className="nav bg-white-300  pl-40 pr-40">
            <div className="container flex justify-between items-center">
                <div className="hotel font-bold"> holtel : 0988252613</div>
                <div className="logo"> <img src="../../../../src/assets/2035342283933.png" alt="" width="150"/></div>
                <div className="seaarch flex"> 
                   <div className="hover">
                     <input className="input-search border border-black-900 w-80 h-8 rounded" type="text" placeholder="search" />
                     <button className="button-search font-bold">tim kiếm |</button>
                    </div>
                    
                    <div className="cart font-bold"><a href="cart.html"> <i className="fa-solid fa-cart-shopping"></i> giỏ hàng </a></div>
                </div>

            </div>
        </div>
        <div className="menu flex justify-center font-bold">
           <ul>
            <li><a href="index.html">Trang Chủ</a></li>
            <li>
                <a href="detail.html">Sản Phẩm <i className="fa-solid fa-arrow-down"></i> </a>
                <ul className="dropdown">
                <li className="text">
                    <a href="">phoine</a>
                    <a href="">sámung</a>
                    <a href="">xaomi</a>
                </li>
                </ul>
            </li>
            <li><a href="">Tin Tức</a></li>
            <li><a href="lienhe.html">Liên Hệ</a></li>
           </ul>
        </div>
        <div className="banner">
            <div className="img-banner">
                <img src="../../../../src/assets/2022422422202.jpg" alt="" />
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Header