import React from 'react';
import { FaTruck, FaAddressCard } from 'react-icons/fa';
import { BsFillCalendar2HeartFill, BsPerson } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Product from '../routes/Product';
import "../Styles/home.css"

import { products } from '../Data/ProductData'
import { useDispatch } from 'react-redux';
import Products from '../components/Products';

function Home() {



  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });

  }
  return (
    <div>
      <section className="main bg-light">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6 pt-5">
              <p className="m-0 pt-5 brnd-caption">WINTER FASHION</p>
              <h1>Fashion collection 2021</h1>
              <Link to={"/pro"}><button className="btn2 mt-3">SHOP NOW</button></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="next py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="card zoom-n-rotate">
                <img src="./img/beautiful.jpg" className="img-fluid" alt="" />
                <Link to={"/Female"}><button className="btnc">Shop For More</button></Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card zoom-n-rotate">
                <img src="./img/girly.jpg" className="img-fluid" alt="" />
                <Link to={"/Kids"}><button className="btnc">Shop For More</button></Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card zoom-n-rotate">
                <img src="./img/mann.jpg" className="img-fluid" alt="" />
                <Link to={"/Male"}><button className="btnc">Shop For More</button></Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="product py-5">
        <div className="container py-5">
          <h1>Our Latest Product</h1>
          <div className="row pt-5">
            {products.slice(0, 8).map((item) => {
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

      <section className="filter my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 text-center">
              <h1>New Arrivals</h1>
            </div>
          </div>
          <div className="row pt-5 g-2">
            <div className="col-lg-4 mix green">
              <div className="card border-0">
                <img src="./img/happy.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mix green">
              <div className="card border-0">
                <img src="./img/horizental.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mix green">
              <div className="card border-0">
                <img src="./img/portrait.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mix green">
              <div className="card border-0">
                <img src="./img/portrait.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mix green">
              <div className="card border-0">
                <img src="./img/african.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mix green">
              <div className="card border-0">
                <img src="./img/redhead.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="iconic py-5">
        <div className="container text-center py-5">
          <div className="row pb-5">
            <div className="col-lg-4">
              <span className="fas icon"><FaTruck /></span>
              <h3 className="py-3">Free Shipping</h3>
              <p>Divided face for beqring the divide unto seed winged divided light Forth the bearing</p>
            </div>
            <div className="col-lg-4">
              <span className="fas icon"><BsFillCalendar2HeartFill /></span>

              <h3 className="py-3">Free Shipping</h3>
              <p>Divided face for beqring the divide unto seed winged divided light Forth the bearing</p>
            </div>
            <div className="col-lg-4">
              <span className="fas icon"><FaAddressCard /></span>
              <h3 className="py-3">Free Shipping</h3>
              <p>Divided face for beqring the divide unto seed winged divided light Forth the bearing</p>
            </div>
          </div>
        </div>
      </section>
      <section className="news pt-5">
        <div className="container-fluid pt-3 text-white">
          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="row">
                <div className="col-lg-2">
                  <h3 className="pb-3">Category</h3>
                  <p className="m-0"><a href="#">Male</a></p>
                  <p className="m-0"><a href="#">Female</a></p>
                  <p className="m-0"><a href="#">Shoes</a></p>
                  <p className="m-0"><a href="#">Fashion</a></p>
                </div>
                <div className="col-lg-2">
                  <h3 className="pb-3">Company</h3>
                  <p className="m-0"><a href="#">About</a></p>
                  <p className="m-0"><a href="#">New's</a></p>
                  <p className="m-0"><a href="#">FAQ's</a></p>
                  <p className="m-0"><a href="#">Contact</a></p>
                </div>
                <div className="col-lg-3">
                  <h3 className="pb-3">Address</h3>
                  <p>200, Green block, NewYork <br />
                    +10 456 267 1678</p>

                  <a href="#">Contact@Fashion.com</a>
                </div>
                <div className="col-lg-5">
                  <h3 className="pb-3">NewsLetter</h3>
                  <form action="" className="d-flex">
                    <input type="text" className="sub p-3" placeholder="Your Email" />
                    <button className="btns">SubScribe </button>
                  </form>
                  <div className="icon d-flex text-center pt-5">
                    <div className="circle fab">
                      <a href="https://www.facebook.com/"><BiLogoFacebook className="circle fab" /></a>
                    </div>
                    <div className="circle mx-2">
                      <a href='https://www.Twitter.com/'>< AiOutlineTwitter className="circle fab " /></a>
                    </div>
                    <div className="circle">
                      <a href='https://www.instagram.com/'>< AiOutlineInstagram className="circle fab" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home