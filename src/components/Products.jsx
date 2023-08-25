import React from 'react'



function Products({ name, id, price, handler, imgSrc }) {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 " key={id}>
                <div className="card border-0">
                    <div className="card-body pb-5 bg-light">
                        <img src={imgSrc} alt="" className="img-fluid" />
                    </div>
                    <div className="card-footer border-0 text-center bg-white">
                        <h5>{name}</h5>
                        <p className="m-0">{price}</p>
                        <div >
                            <button className='btn btn-p w-100' onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}
                                style={{ backgroundColor: "rgb(238, 11, 105)", color: "white" }}>
                                Add to cart</button></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products