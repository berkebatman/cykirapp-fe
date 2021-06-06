import React from "react";
import useForm from "../../effects/useForm";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Authentication from "../../services/Authentication";
import postProduct from "../../services/Products/postProduct/index.js";

const auth = new Authentication();

const ListAnItem = () => {
  let history = useHistory();
  const jwtPayload = auth.getAccessTokenPayload();
  const userId = jwtPayload[0].userId;
  

  const {
    productName,
    setProductName,
    productNameErrorMessage,
    price,
    setPrice,
    priceErrorMessage,
    productDescription,
    setProductDescription,
    productDescriptionErrorMessage,
    productTown,
    setProductTown,
    productTownErrorMessage,
    productCity,
    setProductCity,
    productCityErrorMessage,
    categoryId,
    setCategoryId,
    categoryIdErrorMessage,
    image,
    setImage,
    imageErrorMessage,
  } = useForm({
    productName: {
      validation: (productName) => {
        if (productName === "") {
          return "Product name is required";
        }
      },
      initialValue: "",
    },
    price: {
      validation: (price) => {
        if (price === "") {
          return "Price is required";
        }
      },
      initialValue: "",
    },
    productDescription: {
      validation: (productDescription) => {
        if (productDescription === "") {
          return "Description is required";
        }
      },
      initialValue: "",
    },

    productTown: {
      validation: (productTown) => {
        if (productTown === "") {
          return "Town is required";
        }
      },
      initialValue: "",
    },
    productCity: {
      validation: (productCity) => {
        if (productCity === "") {
          return "City is required";
        }
      },
      initialValue: "",
    },
    categoryId: {
      validation: (categoryId) => {
        if (categoryId === "") {
          return "Category is required";
        }
      },
      initialValue: "",
    },
    image: {
        validation: (image) => {
          if (image === "") {
            return "Category is required";
          }
        },
        initialValue: "",
      },
  });

  console.log("image")
  const handleProductPost = (event) => {
    event.preventDefault();
    postProduct({
      productName,
      productDescription,
      price,
      image,
      productCity,
      productTown,
      userId,
      categoryId,
    })
      .then(() => {
        history.push("/product-listed");
      })
      .catch((err) => console.log(err, "nope"));
  };

  console.log(categoryId, "categoryid");

  return (
    <>
      <div class="checkout-area pb-80 pt-25">
        <div class="container">
          <div class="row">
            <div class="ml-auto mr-auto col-lg-9">
              <div class="checkout-wrapper">
                <div id="faq" class="panel-group">
                  <div class="panel panel-default single-my-account">
                    <div class="panel-heading my-account-title">
                      <h3 class="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#faq"
                          href="#my-account-1"
                          style={{ fontWeight: "bolder", color: "#a749ff" }}
                        >
                          Enter product details
                        </a>
                      </h3>
                    </div>
                    <div id="my-account-1" class="panel-collapse collapse show">
                      <div class="panel-body">
                        <div class="myaccount-info-wrapper">
                          <div class="row">
                            <div class="col-lg-6 col-md-6">
                              <div class="billing-info">
                                <label style={{ fontWeight: "bolder" }}>
                                  Product Name
                                </label>
                                <input
                                  type="text"
                                  onChange={(e) => {
                                    setProductName(e.target.value);
                                  }}
                                  value={productName}
                                  required
                                />
                              </div>
                            </div>

                            <div class="col-lg-6 col-md-6" >
                              <div class="billing-info" >
                                <label style={{ fontWeight: "bolder" }}>
                                  Price (₺/day)
                                </label>
                                <input style={{textAlign: "center"}}
                                  type="number"
                                  onChange={(e) => {
                                    setPrice(e.target.value);
                                  }}
                                  value={price}
                                  required
                                />
                              </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                              <div class="billing-info">
                                <label style={{ fontWeight: "bolder" }}>
                                  Product Description
                                </label>
                                <input
                                  type="text"
                                  onChange={(e) => {
                                    setProductDescription(e.target.value);
                                  }}
                                  value={productDescription}
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="billing-info">
                                <label style={{ fontWeight: "bolder" }}>
                                  Product Town
                                </label>
                                <input
                                  type="text"
                                  onChange={(e) => {
                                    setProductTown(e.target.value);
                                  }}
                                  value={productTown}
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="billing-info">
                                <label style={{ fontWeight: "bolder" }}>
                                  Product City
                                </label>
                                <input
                                  type="text"
                                  onChange={(e) => {
                                    setProductCity(e.target.value);
                                  }}
                                  value={productCity}
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div class="billing-info">
                                <label
                                  style={{
                                    fontWeight: "bolder",
                                    marginBottom: "0px",
                                  }}
                                >
                                  Product Category
                                </label>
                              </div>
                              <div>
                                <select
                                  style={{ marginBottom: "25px", width: "50%" }}
                                  onChange={(e) => {
                                    setCategoryId(e.target.value);
                                  }}
                                >
                                  <option
                                    value="1"
                                  >
                                    Musical Instruments
                                  </option>
                                  <option value="2">
                                    Film and Photography
                                  </option>
                                  <option value="3"
                                    >Electronics</option>
                                  <option value="4">Transport</option>
                                  <option value="5">Holiday and Travel</option>
                                  <option value="6">
                                    Home, office and Gardening
                                  </option>
                                  <option value="7">Sports Equipment</option>
                                  <option value="8">Storage</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div>
                                <label style={{ fontWeight: "bolder" }}>
                                  Upload image
                                </label>
                                <input
                                  style={{
                                    background: "white",
                                    border: "0.0000000000001px",
                                    paddingLeft: "30%",
                                    marginTop: "5px",
                                  }}
                                  type="file"
                                  onChange={(event) => {
                                    setImage(event.target.files[0]);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="billing-back-btn"  style={{ justifyContent: "center"}}>
                            {/* <div class="billing-back">
                              <a href="#">
                                <i class="fa fa-arrow-up"></i> back
                              </a>
                            </div> */}
                            <div class="billing-btn" style={{ justifyContent: "center", width: "500px"}}>
                              <button type="submit" onClick={handleProductPost}>
                                List product
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ListAnItem;
