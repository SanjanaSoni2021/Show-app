import React from 'react'
import { products } from '../Data/ProductData'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import Products from '../components/Products';

function Kids() {
    const dispatch = useDispatch()

    const addToCartHandler = (options) => {
        dispatch({ type: "addToCart", payload: options });
        dispatch({ type: "calculatePrice" });
        toast.success("Add to cart")
    }
    return (
        <div>
            <section className="product py-5">
                <div className="container py-5">
                    <h1>Kids Product</h1>
                    <div className="row pt-5">
                        {products.slice(8).map((item) => {
                            return (
                                <Products
                                    key={item.id}
                                    imgSrc={item.imgSrc}
                                    name={item.name}
                                    price={item.price}
                                    id={item.id}
                                    handler={addToCartHandler} />

                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Kids