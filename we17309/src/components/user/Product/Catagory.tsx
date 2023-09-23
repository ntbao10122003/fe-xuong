import React from 'react'

const Catagory = () => {
  return (
    <div>
        <div className="container-catagory ">
                    <div className="awe-section-4 pt-20 relative">
                        <div className="before-main "></div>
                        <h1 className="text-3xl font-bold">sản phẩm danh mục</h1>
                    </div>
                    <div className="mini pt-6">
                        <span>
                            Những sản phẩm nổi tiếng với chất lượng hàng đầu được shop nhập về phục vụ quý khách hàng
                        </span>
                    </div>
                    <div className="item flex pt-9">
                        <a className="pr-9 text-lg text-blue-500 " href=""><img className="w-20" src="../../../src/assets/item1.png" alt="" />apple watch</a>
                        <a className="pr-9 text-lg hover:text-blue-500"  href="" ><img className="w-20" src="../../../src/assets/item2.png" alt="" />apple watch</a>
                    </div>
                  
                </div> 
    </div>
  )
}

export default Catagory