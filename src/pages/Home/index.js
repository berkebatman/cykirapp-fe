import React from "react";
import { Link } from "react-router-dom";
import useAPI from "../../effects/useAPI";
import getProductCategories from "../../services/Categories/getCategories";
import Authentication from "../../services/Authentication";

const auth = new Authentication();

const Home = () => {
  const [loading, error, categories] = useAPI(() => getProductCategories(), []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }


  const divertImageLink = (imageLink) => {
    let before = "../../";
    return before + imageLink;
  };

  let link = "../assets/images/gitar.png";
  console.log(divertImageLink(link), "diverted image link");

  return (
    <>
      <div class="shop-instagram-area hm9-section-padding pb-70">
        <div class="container-fluid">
          <div
            class="shop-instagram-title text-center bg-gray-2 mb-10"
            style={{ backgroundColor: "black" }}
          >
            <h1 style={{ margin: "10px", color: "whitesmoke" }}>
              Rent Anything
            </h1>
            <div class="buttons-container">
              <Link to="/products">
                <button type="submit">
                  <span>Find an Item</span>
                </button>
              </Link>
              <Link to="/list-an-item">
              <button type="submit">
                <span>List an Item</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 class="mb-50 mt-40">Categories</h2>
        </div>

        <div class="shop-instagram-bottom">
          <div class="container-fluid">
            <div class="row">
              {categories.categories.map((cat) => {
              
                return (
                  <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="single-instagram-2 mb-30 mt-28">
                      <a href="product-details.html">
                        <img
                          src={cat.categoryImage}
                          width="80px"
                          height="110px"
                          alt=""
                          style={{ borderRadius: "15px" }}
                        />
                      </a>
                      <div class="instagram-2-icon">
                        <a href="product-details.html">
                          <h6>{cat.categoryName}</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>
        </div>
      </div>
      <div class="suppoer-area pt-100 pb-60" style={{paddingTop:"10px"}}>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="support-wrap-2 mb-30 support-shape text-center">
                    <div class="support-content-2">
                        <img class="animated" src="assets/img/icon-img/support-1.png" alt=""/>
                        <h5>Rent a product</h5>
                        <p>Generate income from your unused items or unsold inventory.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="support-wrap-2 mb-30 support-shape text-center">
                    <div class="support-content-2">
                        <img class="animated" src="assets/img/icon-img/support-2.png" alt=""/>
                        <h5>Outstanding Support</h5>
                        <p>Our team is at your convenience through many media channels.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="support-wrap-2 mb-30 text-center">
                    <div class="support-content-2">
                        <img class="animated" src="assets/img/icon-img/support-3.png" alt=""/>
                        <h5>100% insured</h5>
                        <p>Products are insered by our partners.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      <div class="subscribe-area-3 pb-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto">
              <div class="subscribe-style-3 text-center">
                <h2>Subscribe</h2>
                <p>Subscribe to our newsletter to receive updated on new products and product availability</p>
                <div id="mc_embed_signup" class="subscribe-form-3 mt-35">
                  <form
                    id="mc-embedded-subscribe-form"
                    class="validate"
                    novalidate=""
                    target="_blank"
                    name="mc-embedded-subscribe-form"
                    method="post"
                    action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                  >
                    <div id="mc_embed_signup_scroll" class="mc-form">
                      <input
                        class="email"
                        type="email"
                        required=""
                        placeholder="Your Email Address"
                        name="EMAIL"
                        value=""
                      />
                      <div class="mc-news" aria-hidden="true">
                        <input
                          type="text"
                          value=""
                          tabindex="-1"
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                        />
                      </div>
                      <div class="clear-3 red-3-subscribe subscribe-radious">
                        <input
                          id="mc-embedded-subscribe"
                          class="button"
                          type="submit"
                          name="subscribe"
                          value="Subscribe"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
