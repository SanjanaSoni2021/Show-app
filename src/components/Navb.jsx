import "../Styles/home.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { red } from '@mui/material/colors'

import { useSelector } from 'react-redux';
function Navb() {
  

  const color = red[500];
  const { cartItem } = useSelector(state => state.cart)


  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand design">Fashion</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 my-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Home</a> */}
                <Link to={"/"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/pro"}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"} >Contact</Link>
              </li>

            </ul>
            <form className="d-flex">
              <span className="fab"><Link to={"/Like"} className="fab"><AiOutlineHeart /></Link></span>
              {/* <span className="far px-3"><Link to={"/Cart"} className="fab"><AiOutlineShoppingCart /></Link></span> */}
              <span className="far px-3">
              <Badge badgeContent={cartItem.length} color="secondary">
              <Link className='fab' to='/cart'><AiOutlineShoppingCart /></Link>
              </Badge>
              </span>
              <span className="far "><Link to={"/Contact"} className="fab"><BsPerson /></Link></span>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navb


