import React from "react";
import { Link } from "react-router-dom";
import useAPI from "../../effects/useAPI";
import getProductCategories from "../../services/Categories/getCategories";

const Home = () => {
  const [loading, error, categories] = useAPI(() => getProductCategories(), []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }
  console.log(categories);

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
            class="shop-instagram-title text-center bg-gray-2 mb-20"
            style={{ backgroundColor: "black" }}
          >
            <h1 style={{ margin: "10px", color: "whitesmoke" }}>
              Rent Anything
            </h1>
            <div class="buttons-container">
              <Link to="/categories">
                <button type="submit">
                  <span>Find an Item</span>
                </button>
              </Link>
              <button type="submit">
                <span>List an Item</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 class="mb-20">Categories</h2>
        </div>

        <div class="shop-instagram-bottom">
          <div class="container-fluid">
            <div class="row">
              {categories.categories.map((cat) => {
                console.log(cat.categoryImage);
                return (
                  <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="single-instagram-2 mb-30">
                      <a href="product-details.html">
                        <img
                          src={cat.categoryImage}
                          width="150px"
                          height="225px"
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
      <div class="suppoer-area pt-100 pb-60">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="support-wrap-2 mb-30 support-shape text-center">
                    <div class="support-content-2">
                        <img class="animated" src="assets/img/icon-img/support-1.png" alt=""/>
                        <h5>Free Shipping</h5>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="support-wrap-2 mb-30 support-shape text-center">
                    <div class="support-content-2">
                        <img class="animated" src="assets/img/icon-img/support-2.png" alt=""/>
                        <h5>Support 24/7</h5>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="support-wrap-2 mb-30 text-center">
                    <div class="support-content-2">
                        <img class="animated" src="assets/img/icon-img/support-3.png" alt=""/>
                        <h5>Money Return</h5>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
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
                <h2>Join With Us! </h2>
                <p>Subscribe to our newsletter to receive news on update</p>
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
