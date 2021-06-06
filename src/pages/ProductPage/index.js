import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../effects/useAPI";
import getProductById from "../../services/Products/getProductById";

const ProductPage = () => {
  const { id }  = useParams();

  const [productLoading, productError, product] = useAPI(
    () => getProductById({ productId: id }),
    [id]
  );

  if (productLoading) {
    return <div>Loading...</div>;
  }

  if (productError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {product.productById.map((product) => {
          return (  
      <div class="shop-area pt-100 pb-100">     
        <div class="container">
          <div class="row">      
            <div class="col-xl-7 col-lg-7 col-md-12"> 
              <div class="product-details-img mr-20 product-details-tab">
                <div id="gallery" class="product-dec-slider-2">
                 
                    <img
                      src={product.image}
                      alt=""
                      style={{ height: "500px", width: "500px"}}
                    />
                  
                </div>
                <div class="zoompro-wrap zoompro-2 pl-20">
                  <div class="zoompro-border zoompro-span" style={{ marginTop: "20px"}}>
                    <img
                      class="zoompro"
                      src="assets/img/product-details/product-detalis-l1.jpg"
                      data-zoom-image="assets/img/product-details/product-detalis-bl1.jpg"
                      alt=""
                    />
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-lg-5 col-md-12">
              <div class="product-details-content">
                <h2>{product.productName}</h2>
                <div class="product-details-price">
                  <span>{product.price}₺/day</span>
                  <span class="product-video" style={{marginLeft: "15px", fontSize: "16px", color: product.availability===1 ? "green" : "red"}}>
                  {(product.availability === 1) ?  `Available` : `Out of Stock`}
                    </span>
                </div>
                <div class="pro-details-rating-wrap">
                  <div class="pro-details-rating">
                    <i class={`${product.rating >= 1 ? "fa fa-star-o yellow" : "fa fa-star-o"}`}></i>
                    <i class={`${product.rating >= 2 ? "fa fa-star-o yellow" : "fa fa-star-o"}`}></i>
                    <i class={`${product.rating >= 3 ? "fa fa-star-o yellow" : "fa fa-star-o"}`}></i>
                    <i class={`${product.rating >= 4 ? "fa fa-star-o yellow" : "fa fa-star-o"}`}></i>
                    <i class={`${product.rating >= 5 ? "fa fa-star-o yellow" : "fa fa-star-o"}`}></i>
                  </div>
                  <span>
                    <a href="#">3 Reviews</a>
                  </span>
                </div>
                <p style={{textAlign:"left"}}>
                 {product.productDescription}
                </p>
                <div class="pro-details-list" style={{alignText:"left"}}>
                  <ul>
                    <li style={{ fontWeight: "bold"}}>{`${product.firstName} ${product.lastName}`}</li>
                    <li>{product.town}</li>
                    <li>{product.city}</li>
                  </ul>
                </div>
                <div class="pro-details-size-color">
                
                  <div class="pro-details-size">
                    <span>Pick a date</span>
                    <div class="pro-details-size-content">
                      <ul>
                      <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">6</a>
                        </li>
                        <li>
                          <a href="#">7</a>
                        </li>
                        <li>
                          <a href="#">8</a>
                        </li>
                        <li>
                          <a href="#">9</a>
                        </li>
                        <li>
                          <a href="#">10</a>
                        </li>
                        <li>
                          <a href="#">11</a>
                        </li>
                        <li>
                          <a href="#">12</a>
                        </li>
                        <li>
                          <a href="#">13</a>
                        </li>
                        <li>
                          <a href="#">14</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="pro-details-quality">
                  
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
                      <a href="#">Musical Instruments</a>
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
          )
    })}
    </>
  );
};

export default ProductPage;
