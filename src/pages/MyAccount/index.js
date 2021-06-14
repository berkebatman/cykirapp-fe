import React from "react";
import Authentication from "../../services/Authentication";
import getProductsByUserId from "../../services/Products/getProductsByUserId";
import useAPI from "../../effects/useAPI";
import myOrders from "../../services/Order/getOrdersByUserId/index"

const auth = new Authentication();

const MyAccount = () => {
  const jwtPayload = auth.getAccessTokenPayload();
  const activeUser = jwtPayload[0];
  const id = activeUser.userId;
  console.log(id);

  const [loading, error, userProducts] = useAPI(
    () => getProductsByUserId({ userId: id }),
    [id]
  );
  console.log(userProducts);

  const [ordersLoading, ordersError, orders] = useAPI(
    () => myOrders({ userId: id }),
    [id]
  );

  console.log(orders)

  if (loading || ordersLoading) {
    return <div>Loading...</div>;
  }

  if (error || ordersError) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {/* <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div class="container">
          <div class="breadcrumb-content text-center">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">My Account </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div class="checkout-area pb-80 pt-15">
        <div class="container">
          <div class="row">
            <div class="ml-auto mr-auto col-lg-9">
              <div class="checkout-wrapper">
                <div id="faq" class="panel-group">
                  <div class="panel panel-default single-my-account">
                    <div class="panel-heading my-account-title">
                      <h3 class="panel-title">
                        <span>1 .</span>{" "}
                        <a
                          data-toggle="collapse"
                          data-parent="#faq"
                          href="#my-account-1"
                          style={{ fontWeight: "bold" }}
                        >
                          Your account information{" "}
                        </a>
                      </h3>
                    </div>
                    <div id="my-account-1" class="panel-collapse collapse show">
                      <div class="panel-body">
                        <div class="myaccount-info-wrapper">
                          <div class="row">
                            <div class="col-lg-6 col-md-6">
                              <div class="billing-info" style={{textAlign:"left"}}>
                                <div style={{ fontWeight: "bold" }}>Name</div>
                                {activeUser.firstName + " " + activeUser.lastName}
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6" style={{textAlign:"left"}}>
                              <div class="billing-info">
                                <div style={{ fontWeight: "bold" }}>Town</div>
                                {activeUser.town}
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6" style={{textAlign:"left"}}>
                              <div class="billing-info">
                                <div style={{ fontWeight: "bold" }}>Email</div>
                                {activeUser.email}
                              </div>
                            </div>
                            
                            <div class="col-lg-6 col-md-6" style={{textAlign:"left"}}>
                              <div class="billing-info">
                                <div style={{ fontWeight: "bold" }}>City</div>
                                {activeUser.city}
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6" style={{textAlign:"left"}}>
                              <div class="billing-info">
                                <div style={{ fontWeight: "bold" }}>
                                  Phone Number
                                </div>
                                {activeUser.phoneNumber}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default single-my-account">
                    <div class="panel-heading my-account-title">
                      <h3 class="panel-title">
                        <span>2 .</span>{" "}
                        <a
                          data-toggle="collapse"
                          data-parent="#faq"
                          href="#my-account-2"
                        >
                          Your Products{" "}
                        </a>
                      </h3>
                    </div>

                    <div id="my-account-2" class="panel-collapse collapse">
                        {userProducts.productByUserId.map((product) => { 
                            return  (
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                                
                              <div class="table-content table-responsive cart-table-content">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Image</th>
                                      <th>Product Name</th>
                                      <th>Daily Rental Price</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="product-thumbnail">
                                        <a href="#">
                                          <img
                                            src={"http://localhost:3001/" + product.image}
                                            style={{height: "65px,", width: "65px"}}
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td class="product-name">
                                        <a href="#">{product.productName}</a>
                                      </td>
                                      <td class="product-price-cart">
                                        <span class="amount">{product.price}</span>
                                      </td>
                                     
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                            )  
                })}
                </div>
                  </div>
                  <div class="panel panel-default single-my-account">
                    <div class="panel-heading my-account-title">
                      <h3 class="panel-title">
                        <span>3 .</span>{" "}
                        <a
                          data-toggle="collapse"
                          data-parent="#faq"
                          href="#my-account-3"
                        >
                          Your Orders{" "}
                        </a>
                      </h3>
                    </div>
                    <div id="my-account-3" class="panel-collapse collapse">
                    {orders.ordersByUserId.map((order) => { 
                            return  (
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                              <div class="table-content table-responsive cart-table-content">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Image</th>
                                      <th>Product Name</th>
                                      
                                      <th>Daily Rental Price</th>   
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                    <td class="product-thumbnail">
                                        <a href="#">
                                          <img
                                            src={"http://localhost:3001/" + order.image}
                                            style={{height: "65px,", width: "65px"}}
                                            alt=""
                                          />
                                        </a>
                                      </td>
                                      <td class="product-name">
                                        <a href="#">{order.productName}</a>
                                      </td>
                                    
                                      <td class="product-price-cart">
                                        <span class="amount">{order.price}</span>
                                      </td>
                                    </tr>
                                   
                                  </tbody>
                                </table>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      )  
                    })}
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

export default MyAccount;
