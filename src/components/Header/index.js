import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header class="header-area clearfix">
        <div class="header-top-area border-none header-padding-2"></div>
        <div class="header-bottom sticky-bar header-res-padding header-padding-2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-6 col-4">
                <div class="logo">
                  <a href="index.html">
                    <h2 style={{color:"#a749ff"}}>kirapp.</h2>
                  </a>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 d-none d-lg-block">
                <div class="main-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/home">
                          <a href="home" className="link-header">
                            Home
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link to="/category/all">
                          <a  className="link-header">
                            Products
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link to="/list-an-item">
                          <a href="blog" className="link-header">
                            List an Item
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link to="/blog">
                          <a href="blog" className="link-header">
                            Blog
                          </a>
                        </Link>
                      </li>

                      

                      <li>
                      <Link to="/about">
                        <a href="about" className="link-header"> About </a>
                        </Link>
                      </li>
                      {/* <li> */}
                      {/* <Link to="/contact">
                        <a href="contact" className="link-header"> Contact</a>
                        </Link>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              
              <div class="col-xl-2 col-lg-2 col-md-6 col-8">
                       <div class="header-right-wrap">
                        {/* <div class="same-style header-search">
                            <a class="search-active" href="#"><i class="pe-7s-search"></i></a>
                            <div class="search-content">
                                <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button class="button-search"><i class="pe-7s-search"></i></button>
                                </form>
                            </div>
                        </div> */}
                        <div class="same-style account-satting">
                          <Link to="/myaccount">
                            <i class="pe-7s-user-female"></i>
                            </Link>
                        </div>
                        {/* <div class="same-style header-wishlist">
                            <a href="wishlist.html"><i class="pe-7s-like"></i></a>
                        </div> */}
                        <div class="same-style cart-wrap">
                            <button class="icon-cart">
                                <i class="pe-7s-shopbag"></i>
                                <span class="count-style">02</span>
                            </button>
                            <div class="shopping-cart-content">
                                <ul>
                                    <li class="single-shopping-cart">
                                        <div class="shopping-cart-img">
                                            <a href="#"><img alt="" src="assets/img/cart/cart-1.png"/></a>
                                        </div>
                                        <div class="shopping-cart-title">
                                            <h4><a href="#">T- Shart & Jeans </a></h4>
                                            <h6>Qty: 02</h6>
                                            <span>$260.00</span>
                                        </div>
                                        <div class="shopping-cart-delete">
                                            <a href="#"><i class="fa fa-times-circle"></i></a>
                                        </div>
                                    </li>
                                    <li class="single-shopping-cart">
                                        <div class="shopping-cart-img">
                                            <a href="#"><img alt="" src="assets/img/cart/cart-2.png"/></a>
                                        </div>
                                        <div class="shopping-cart-title">
                                            <h4><a href="#">T- Shart & Jeans </a></h4>
                                            <h6>Qty: 02</h6>
                                            <span>$260.00</span>
                                        </div>
                                        <div class="shopping-cart-delete">
                                            <a href="#"><i class="fa fa-times-circle"></i></a>
                                        </div>
                                    </li>
                                </ul>
                                <div class="shopping-cart-total">
                                    <h4>Shipping : <span>$20.00</span></h4>
                                    <h4>Total : <span class="shop-total">$260.00</span></h4>
                                </div>
                                <div class="shopping-cart-btn btn-hover text-center">
                                    <a class="default-btn" href="cart-page.html">view cart</a>
                                    <a class="default-btn" href="checkout.html">checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
            <div class="mobile-menu-area">
              <div class="mobile-menu">
                <nav id="mobile-menu-active">
                  <ul class="menu-overflow">
                    <li>
                      <a href="index.html">HOME</a>
                      <ul>
                        <li>
                          <a href="#">Demo Group 01</a>
                          <ul>
                            <li>
                              <a href="index.html">Home 1 – Fashion</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home 2 – Fashion</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home 3 – Fashion</a>
                            </li>
                            <li>
                              <a href="index-4.html">Home 4 – Fashion</a>
                            </li>
                            <li>
                              <a href="index-5.html">Home 5 – Fashion</a>
                            </li>
                            <li>
                              <a href="index-6.html">Home 6 – Fashion</a>
                            </li>
                            <li>
                              <a href="index-7.html">Home 7 – Fashion</a>
                            </li>
                            <li>
                              <a href="index-8.html">Home 8 – Minimal</a>
                            </li>
                            <li>
                              <a href="index-9.html">Home 9 – Electronics</a>
                            </li>
                            <li>
                              <a href="index-10.html">Home 10 – Furniture</a>
                            </li>
                            <li>
                              <a href="index-11.html">
                                Home 11 - showcase slider
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Demo Group 02</a>
                          <ul>
                            <li>
                              <a href="index-12.html">Home 12 – Plants</a>
                            </li>
                            <li>
                              <a href="index-13.html">Home 13 – Cosmetic</a>
                            </li>
                            <li>
                              <a href="index-14.html">Home 14 – Christmas</a>
                            </li>
                            <li>
                              <a href="index-15.html">Home 15 – Fruit</a>
                            </li>
                            <li>
                              <a href="index-16.html">Home 16 – Black Friday</a>
                            </li>
                            <li>
                              <a href="index-17.html">Home 17 – Flower</a>
                            </li>
                            <li>
                              <a href="index-18.html">Home 18 – Book</a>
                            </li>
                            <li>
                              <a href="index-19.html">Home 19 – Fashion</a>
                            </li>
                            <li>
                              <a href="index-20.html">Home 20 – Electronics</a>
                            </li>
                            <li>
                              <a href="index-21.html">Home 21 – Furniture</a>
                            </li>
                            <li>
                              <a href="index-22.html">Home 22 – Handmade</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Demo Group 03</a>
                          <ul>
                            <li>
                              <a href="index-23.html">Home 23 – Organic</a>
                            </li>
                            <li>
                              <a href="index-24.html">Home 24 – Pet Food</a>
                            </li>
                            <li>
                              <a href="index-25.html">Home 25 – Auto Parts</a>
                            </li>
                            <li>
                              <a href="index-26.html">Home 26 – Cake Shop</a>
                            </li>
                            <li>
                              <a href="index-27.html">Home 27 – Kids Fashion</a>
                            </li>
                            <li>
                              <a href="index-28.html">Home 28 – Book Shop</a>
                            </li>
                            <li>
                              <a href="index-29.html">Home 29 – Flower Shop</a>
                            </li>
                            <li>
                              <a href="index-30.html">Home 30 – Instagram</a>
                            </li>
                            <li>
                              <a href="index-31.html">Home 31 – Black Friday</a>
                            </li>
                            <li>
                              <a href="index-32.html">
                                Home 32 – Valentine Day
                              </a>
                            </li>
                            <li>
                              <a href="index-33.html">
                                Home 33 – Medical Equipment
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Shop</a>
                      <ul>
                        <li>
                          <a href="#">shop layout</a>
                          <ul>
                            <li>
                              <a href="shop.html">standard style</a>
                            </li>
                            <li>
                              <a href="shop-filter.html">Grid filter style</a>
                            </li>
                            <li>
                              <a href="shop-grid-2-col.html">Grid 2 column</a>
                            </li>
                            <li>
                              <a href="shop-no-sidebar.html">Grid No sidebar</a>
                            </li>
                            <li>
                              <a href="shop-grid-fw.html">Grid full wide </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Grid right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html">list 1 column box </a>
                            </li>
                            <li>
                              <a href="shop-list-fw.html">
                                list 1 column full wide{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-fw-2col.html">
                                list 2 column full wide
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">product details</a>
                          <ul>
                            <li>
                              <a href="product-details.html">tab style 1</a>
                            </li>
                            <li>
                              <a href="product-details-2.html">tab style 2</a>
                            </li>
                            <li>
                              <a href="product-details-3.html">tab style 3</a>
                            </li>
                            <li>
                              <a href="product-details-4.html">sticky style</a>
                            </li>
                            <li>
                              <a href="product-details-5.html">
                                gallery style{" "}
                              </a>
                            </li>
                            <li>
                              <a href="product-details-slider-box.html">
                                Slider style
                              </a>
                            </li>
                            <li>
                              <a href="product-details-affiliate.html">
                                affiliate style
                              </a>
                            </li>
                            <li>
                              <a href="product-details-6.html">
                                fixed image style{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Collection</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">about us</a>
                        </li>
                        <li>
                          <a href="cart-page.html">cart page</a>
                        </li>
                        <li>
                          <a href="checkout.html">checkout </a>
                        </li>
                        <li>
                          <a href="wishlist.html">wishlist </a>
                        </li>
                        <li>
                          <a href="my-account.html">my account</a>
                        </li>
                        <li>
                          <a href="login-register.html">login / register </a>
                        </li>
                        <li>
                          <a href="contact.html">contact us </a>
                        </li>
                        <li>
                          <a href="404.html">404 page </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">blog standard</a>
                        </li>
                        <li>
                          <a href="blog-no-sidebar.html">blog no sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">
                            blog right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details 1</a>
                        </li>
                        <li>
                          <a href="blog-details-2.html">blog details 2</a>
                        </li>
                        <li>
                          <a href="blog-details-3.html">blog details 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
