import React, { useState } from "react";
import useAPI from "../../effects/useAPI";
import getProductCategories from "../../services/Categories/getCategories";
import getProducts from "../../services/Products/getProducts"

const Categories = () => {
  const [category, setCategory] = useState("");

  const [loading, error, products] = useAPI(() => getProducts(), []);
  const [loadingCategories, errorCategories, categories] = useAPI(() => getProductCategories(), [category]);

  if (loading || loadingCategories ) {
    return <div>Loading...</div>;
  }

  if (error || errorCategories) {
    return <div>Something went wrong</div>;
  }
  console.log(products, "products");
  console.log(categories, "categories")
  
  return (
    <>
      <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div class="container">
          <div class="breadcrumb-content text-center">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">Shop </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="shop-area pt-95 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="shop-top-bar">
                <div class="select-shoing-wrap">
                  <div class="shop-select">
                    <select>
                      <option value="">Sort by newness</option>
                      <option value="">A to Z</option>
                      <option value=""> Z to A</option>
                      <option value="">In stock</option>
                    </select>
                  </div>
                  <p>Showing 1–12 of 20 result</p>
                </div>
                <div class="shop-tab nav">
                  <a class="active" href="#shop-1" data-toggle="tab">
                    {/* <i class="fa fa-table"></i> */}
                  </a>
                  <a href="#shop-2" data-toggle="tab">
                    <i class="fa fa-list-ul"></i>
                  </a>
                </div>
              </div>
              <div class="shop-bottom-area mt-35">
                <div class="tab-content jump">
                  <div id="shop-1" class="tab-pane ">
                    <div class="row">
                      <div class="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                        <div class="product-wrap mb-25 scroll-zoom">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="assets/img/product/pro-1.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="assets/img/product/pro-1-1.jpg"
                                alt=""
                              />
                            </a>
                            <span class="pink">-10%</span>
                            <div class="product-action">
                              <div class="pro-same-action pro-wishlist">
                                <a title="Wishlist" href="#">
                                  <i class="pe-7s-like"></i>
                                </a>
                              </div>
                              <div class="pro-same-action pro-cart">
                                <a title="Add To Cart" href="#">
                                  <i class="pe-7s-cart"></i> Add to cart
                                </a>
                              </div>
                              <div class="pro-same-action pro-quickview">
                                <a
                                  title="Quick View"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  <i class="pe-7s-look"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="product-content text-center">
                            <h3>
                              <a href="product-details.html">
                                T- Shirt And Jeans
                              </a>
                            </h3>
                            <div class="product-rating">
                              <i class="fa fa-star-o yellow"></i>
                              <i class="fa fa-star-o yellow"></i>
                              <i class="fa fa-star-o yellow"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                            </div>
                            <div class="product-price">
                              <span>$ 60.00</span>
                              <span class="old">$ 60.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="shop-2" class="tab-pane active">
                    <div class="shop-list-wrap mb-30 scroll-zoom">
                      <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                          <div class="product-wrap">
                            <div class="product-img">
                              <a href="product-details.html">
                                <img
                                  class="default-img"
                                  src="assets/img/product/pro-1.jpg"
                                  alt=""
                                />
                                <img
                                  class="hover-img"
                                  src="assets/img/product/pro-1-1.jpg"
                                  alt=""
                                />
                              </a>
                              <span class="pink">-10%</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                          <div class="shop-list-content">
                            <h3>
                              <a href="product-details.html">
                                Products Name Here
                              </a>
                            </h3>
                            <div class="product-list-price">
                              <span>$ 60.00</span>
                              <span class="old">$ 90.00</span>
                            </div>
                            <div class="rating-review">
                              <div class="product-list-rating">
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </div>
                              <a href="#">3 Reviews</a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consecteto adipisic
                              elit eiusm tempor incidid ut labore et dolore
                              magna aliqua Ut enim ad minim{" "}
                            </p>
                            <div class="shop-list-btn btn-hover">
                              <a href="#">ADD TO CART</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="shop-list-wrap mb-30 scroll-zoom">
                      <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                          <div class="product-wrap">
                            <div class="product-img">
                              <a href="product-details.html">
                                <img
                                  class="default-img"
                                  src="assets/img/product/pro-2.jpg"
                                  alt=""
                                />
                                <img
                                  class="hover-img"
                                  src="assets/img/product/pro-2-1.jpg"
                                  alt=""
                                />
                              </a>
                              <span class="purple">New</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                          <div class="shop-list-content">
                            <h3>
                              <a href="product-details.html">
                                Products Name Here
                              </a>
                            </h3>
                            <div class="product-list-price">
                              <span>$ 60.00</span>
                            </div>
                            <div class="rating-review">
                              <div class="product-list-rating">
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </div>
                              <a href="#">3 Reviews</a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consecteto adipisic
                              elit eiusm tempor incidid ut labore et dolore
                              magna aliqua Ut enim ad minim{" "}
                            </p>
                            <div class="shop-list-btn btn-hover">
                              <a href="#">ADD TO CART</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="shop-list-wrap mb-30 scroll-zoom">
                      <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                          <div class="product-wrap">
                            <div class="product-img">
                              <a href="product-details.html">
                                <img
                                  class="default-img"
                                  src="assets/img/product/pro-3.jpg"
                                  alt=""
                                />
                                <img
                                  class="hover-img"
                                  src="assets/img/product/pro-3-1.jpg"
                                  alt=""
                                />
                              </a>
                              <span class="pink">-20%</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                          <div class="shop-list-content">
                            <h3>
                              <a href="product-details.html">
                                Products Name Here
                              </a>
                            </h3>
                            <div class="product-list-price">
                              <span>$ 30.00</span>
                              <span class="old">$ 50.00</span>
                            </div>
                            <div class="rating-review">
                              <div class="product-list-rating">
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </div>
                              <a href="#">3 Reviews</a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consecteto adipisic
                              elit eiusm tempor incidid ut labore et dolore
                              magna aliqua Ut enim ad minim{" "}
                            </p>
                            <div class="shop-list-btn btn-hover">
                              <a href="#">ADD TO CART</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="shop-list-wrap mb-30 scroll-zoom">
                      <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                          <div class="product-wrap">
                            <div class="product-img">
                              <a href="product-details.html">
                                <img
                                  class="default-img"
                                  src="assets/img/product/pro-7.jpg"
                                  alt=""
                                />
                                <img
                                  class="hover-img"
                                  src="assets/img/product/pro-4-1.jpg"
                                  alt=""
                                />
                              </a>
                              <span class="purple">New</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                          <div class="shop-list-content">
                            <h3>
                              <a href="product-details.html">
                                Products Name Here
                              </a>
                            </h3>
                            <div class="product-list-price">
                              <span>$ 70.00</span>
                            </div>
                            <div class="rating-review">
                              <div class="product-list-rating">
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o yellow"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </div>
                              <a href="#">3 Reviews</a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consecteto adipisic
                              elit eiusm tempor incidid ut labore et dolore
                              magna aliqua Ut enim ad minim{" "}
                            </p>
                            <div class="shop-list-btn btn-hover">
                              <a href="#">ADD TO CART</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pro-pagination-style text-center mt-30">
                  <ul>
                    <li>
                      <a class="prev" href="#">
                        <i class="fa fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li>
                      <a class="active" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a class="next" href="#">
                        <i class="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="sidebar-style ml-30">
                <div class="sidebar-widget">
                  <h4 class="pro-sidebar-title">Search </h4>
                  <div class="pro-sidebar-search mb-50 mt-25">
                    <form class="pro-sidebar-search-form" action="#">
                      <input type="text" placeholder="Search here..." />
                      <button>
                        <i class="pe-7s-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="sidebar-widget mt-50">
                  <h4 class="pro-sidebar-title">Tag </h4>
                  <div class="sidebar-widget-tag mt-25">
                    <ul>
                      <li>
                        <a href="#">Clothing</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">For Men</a>
                      </li>
                      <li>
                        <a href="#">Women</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                    </ul>
                  </div>
                </div>
              
                <div class="sidebar-widget">
                  <h4 class="pro-sidebar-title">Refine By </h4>
                  <div class="sidebar-widget-list mt-30">
                    <ul>
                      <li>
                        <div class="sidebar-widget-list-left">
                          <input type="checkbox" value="" />{" "}
                          <a href="#">
                            In Stock <span>4</span>{" "}
                          </a>
                          <span class="checkmark"></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12">
                  <div class="tab-content quickview-big-img">
                    <div id="pro-1" class="tab-pane fade show active">
                      <img src="assets/img/product/quickview-l1.jpg" alt="" />
                    </div>
                    <div id="pro-2" class="tab-pane fade">
                      <img src="assets/img/product/quickview-l2.jpg" alt="" />
                    </div>
                    <div id="pro-3" class="tab-pane fade">
                      <img src="assets/img/product/quickview-l3.jpg" alt="" />
                    </div>
                    <div id="pro-4" class="tab-pane fade">
                      <img src="assets/img/product/quickview-l2.jpg" alt="" />
                    </div>
                  </div>

                  <div class="quickview-wrap mt-15">
                    <div
                      class="quickview-slide-active owl-carousel nav nav-style-1"
                      role="tablist"
                    >
                      <a class="active" data-toggle="tab" href="#pro-1">
                        <img src="assets/img/product/quickview-s1.jpg" alt="" />
                      </a>
                      <a data-toggle="tab" href="#pro-2">
                        <img src="assets/img/product/quickview-s2.jpg" alt="" />
                      </a>
                      <a data-toggle="tab" href="#pro-3">
                        <img src="assets/img/product/quickview-s3.jpg" alt="" />
                      </a>
                      <a data-toggle="tab" href="#pro-4">
                        <img src="assets/img/product/quickview-s2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12">
                  <div class="product-details-content quickview-content">
                    <h2>Products Name Here</h2>
                    <div class="product-details-price">
                      <span>$18.00 </span>
                      <span class="old">$20.00 </span>
                    </div>
                    <div class="pro-details-rating-wrap">
                      <div class="pro-details-rating">
                        <i class="fa fa-star-o yellow"></i>
                        <i class="fa fa-star-o yellow"></i>
                        <i class="fa fa-star-o yellow"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                      </div>
                      <span>3 Reviews</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit
                      eiusm tempor incidid ut labore et dolore magna aliqua. Ut
                      enim ad minim venialo quis nostrud exercitation ullamco
                    </p>
                    <div class="pro-details-list">
                      <ul>
                        <li>- 0.5 mm Dail</li>
                        <li>- Inspired vector icons</li>
                        <li>- Very modern style </li>
                      </ul>
                    </div>
                    <div class="pro-details-size-color">
                      <div class="pro-details-color-wrap">
                        <span>Color</span>
                        <div class="pro-details-color-content">
                          <ul>
                            <li class="blue"></li>
                            <li class="maroon active"></li>
                            <li class="gray"></li>
                            <li class="green"></li>
                            <li class="yellow"></li>
                            <li class="white"></li>
                          </ul>
                        </div>
                      </div>
                      <div class="pro-details-size">
                        <span>Size</span>
                        <div class="pro-details-size-content">
                          <ul>
                            <li>
                              <a href="#">s</a>
                            </li>
                            <li>
                              <a href="#">m</a>
                            </li>
                            <li>
                              <a href="#">l</a>
                            </li>
                            <li>
                              <a href="#">xl</a>
                            </li>
                            <li>
                              <a href="#">xxl</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="pro-details-quality">
                      <div class="cart-plus-minus">
                        <input
                          class="cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="2"
                        />
                      </div>
                      <div class="pro-details-cart btn-hover">
                        <a href="#">Add To Cart</a>
                      </div>
                      <div class="pro-details-wishlist">
                        <a href="#">
                          <i class="fa fa-heart-o"></i>
                        </a>
                      </div>
                      <div class="pro-details-compare">
                        <a href="#">
                          <i class="pe-7s-shuffle"></i>
                        </a>
                      </div>
                    </div>
                    <div class="pro-details-meta">
                      <span>Categories :</span>
                      <ul>
                        <li>
                          <a href="#">Minimal,</a>
                        </li>
                        <li>
                          <a href="#">Furniture,</a>
                        </li>
                        <li>
                          <a href="#">Electronic</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pro-details-meta">
                      <span>Tag :</span>
                      <ul>
                        <li>
                          <a href="#">Fashion, </a>
                        </li>
                        <li>
                          <a href="#">Furniture,</a>
                        </li>
                        <li>
                          <a href="#">Electronic</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pro-details-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
