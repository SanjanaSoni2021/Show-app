import React from 'react'
import {products} from '../Data/ProductData'
import { useDispatch } from 'react-redux';
import Products from '../components/Products';
import { toast } from 'react-hot-toast';
import "../Styles/productcard.css";

const Product = () => {
        const dispatch = useDispatch()
    
        const addToCartHandler = (options) => {
          dispatch({ type: "addToCart", payload: options });
          dispatch({ type: "calculatePrice" });
          alert("add to cart")
          toast.success("add to cart")
        }
        return (
            <>
                <section className="product py-5">
                    <div className="container py-5">
                        <h1>Our Product</h1>
                        <div className="row pt-5">
                            {products.slice(0).map((item) => {
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
            </>
        )
    }

export default Product