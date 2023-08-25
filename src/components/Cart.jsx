import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from "react-icons/ai"
import "../Styles/cart.css"
function Cart() {
  const { cartItem, subtotal, shipping, total } = useSelector(
    (state) => state.cart
  ); const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  return (
    <>
      <section className='ftco-cart'>
        <main >

          {cartItem.length > 0 ? (
            cartItem.map((i) => {
              return (
                <CartItem
                  imgSrc={i.imgSrc}
                  name={i.name}
                  price={i.price}
                  qty={i.quantity}
                  id={i.id}
                  key={i.id}
                  decrement={decrement}
                  increment={increment}
                  deleteHandler={deleteHandler}
                />
              )
            })
          ) :
            <h1 className='mt-5' >No Items in your Cart</h1>
          }

        </main>
        <aside>
          <h3>Price : ${subtotal}</h3>
          <h3>Shipping : ${shipping}</h3>
          <h3>Total : ${total}</h3>
        </aside>

      </section >


    </>
  )

}
const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => {
  return (
    <>

      <div className='cartItem' key={id}>
        <img src={imgSrc} alt="Item" />
        <article>
          <h3>{name}</h3>
          <p>{price} </p>
        </article>

        <div className='inc-dec'>
          <button onClick={() => decrement(id)}>-</button>
          <p>{qty}</p>
          <button onClick={() => increment(id)}>+</button>
        </div>
        <span className='del-icon'> <AiFillDelete onClick={() => deleteHandler(id)} /></span>

      </div>
    </>
  )
}
export default Cart;
