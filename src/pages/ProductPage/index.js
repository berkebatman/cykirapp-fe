import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../effects/useAPI";
import getProductById from "../../services/Products/getProductById";
// import DateFnsUtils from "@date-io/date-fns"; // choose your lib
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import postOrder from "../../services/Order/postOrder";
import Authentication from "../../services/Authentication";
import { useHistory } from "react-router";
import postBookedDate from "../../services/Calendar/postBookedDate";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import getBookedDatesByProductId from "../../services/Calendar/getBookedDateProductId";

const auth = new Authentication();

const ProductPage = () => {
  // react default hooks
  const history = useHistory();

  // productId management
  const { id } = useParams();

  //user managements
  const jwtPayload = auth.getAccessTokenPayload();
  const userId = jwtPayload[0].userId;

  //////////////// date management starts
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [focusedInput, setFocusedInput] = React.useState();
  const getDaysArray = function (start, end) {
    let arr = [];
    let dt;
    for (dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  };
  const daylist = getDaysArray(new Date(startDate), new Date(endDate));
  const formattedDatesList = daylist
    .map((v) => v.toISOString().slice(0, 10))
    .join(",");
  const datesNeeded = formattedDatesList.split(",");
  ////////////// date management end

  // const [datesBookedLoading, datesBookedError, datesBooked] = useAPI(
  //   () => getBookedDatesByProductId({ productId: id }),
  //   [id]
  // );

  // const arrayOfDatesBooked = datesBooked.bookedDates;

  // console.log(typeof(arrayOfDatesBooked), "typeOf")

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

  const handleOrder = (event) => {
    event.preventDefault();
    postOrder({
      userId,
      productId: id,
    })
      .then(() => {
        const forLoop = async () => {
          for (let i = 0; i < datesNeeded.length; i++) {
            let dateToPost = datesNeeded[i];
            // eslint-disable-next-line no-unused-vars
            const bookDate = await postBookedDate({
              userId,
              productId: id,
              date: dateToPost,
            });
          }
        };
        forLoop();
      })
      .then(() => {
        history.push("/order-success");
      })
      .catch((err) => console.log(err, "nope"));
  };

  return (
    <>
      {product.productById.map((product) => {
        return (
          <div class="shop-area pt-100 pb-80">
            <div class="container">
              <div class="row">
                <div class="col-xl-7 col-lg-7 col-md-12">
                  <div class="product-details-img mr-20 product-details-tab">
                    <div id="gallery" class="product-dec-slider-2">
                      <img
                        src={"http://localhost:3001/" + product.image}
                        alt=""
                        style={{ height: "400px", width: "400px" }}
                      />
                    </div>
                    <div class="zoompro-wrap zoompro-2 pl-20">
                      <div
                        class="zoompro-border zoompro-span"
                        style={{ marginTop: "20px" }}
                      >
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
                    <h2 style={{textAlign: "left"}}>{product.productName}</h2>
                    <div class="product-details-price">
                      <span>{product.price}₺/day</span>
                    </div>
                    <div class="pro-details-rating-wrap">
                      <div class="pro-details-rating" style={{border: "0px"}}>
                        <i
                          class={`${
                            product.rating >= 1
                              ? "fa fa-star-o yellow"
                              : "fa fa-star-o"
                          }`}
                        ></i>
                        <i
                          class={`${
                            product.rating >= 2
                              ? "fa fa-star-o yellow"
                              : "fa fa-star-o"
                          }`}
                        ></i>
                        <i
                          class={`${
                            product.rating >= 3
                              ? "fa fa-star-o yellow"
                              : "fa fa-star-o"
                          }`}
                        ></i>
                        <i
                          class={`${
                            product.rating >= 4
                              ? "fa fa-star-o yellow"
                              : "fa fa-star-o"
                          }`}
                        ></i>
                        <i
                          class={`${
                            product.rating >= 5
                              ? "fa fa-star-o yellow"
                              : "fa fa-star-o"
                          }`}
                        ></i>
                      </div>
                      {/* <span>
                        <a href="#">3 Reviews</a>
                      </span> */}
                    </div>
                    <p style={{ textAlign: "left" }}>
                      {product.productDescription}
                    </p>
                    <div
                      class="pro-details-list"
                      style={{ alignText: "left", paddingBottom: "0" }}
                    >
                      <ul>
                        <li>
                          <span
                            style={{
                              fontWeight: "bold",
                              display: "block",
                              marginRight: "5px",
                            }}
                          >
                            Product Owner:
                          </span>{" "}
                          <span>
                            {`${product.firstName} ${product.lastName}`}{" "}
                          </span>
                        </li>
                        <li>
                          {" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              display: "block",
                              marginRight: "5px",
                            }}
                          >
                            Product town:
                          </span>
                          {product.productTown}
                        </li>

                        <li>
                          {" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              display: "block",
                              marginRight: "5px",
                            }}
                          >
                            Product City:
                          </span>
                          {product.productCity}
                        </li>
                      </ul>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div>
                        <h4>Select Dates</h4>
                        <DateRangePicker
                          startDate={startDate}
                          startDateId="start-date"
                          endDate={endDate}
                          endDateId="end-date"
                          onDatesChange={({ startDate, endDate }) => {
                            setStartDate(startDate);
                            setEndDate(endDate);
                          }}
                          focusedInput={focusedInput}
                          onFocusChange={(focusedInput) =>
                            setFocusedInput(focusedInput)
                          }
                          openDirection={"up"}
                        />
                      </div>
                      <div
                        class="pro-details-quality"
                        style={{ justifyContent: "center" }}
                      >
                        <div class="pro-details-cart btn-hover">
                          <a href="#" onClick={handleOrder} s>
                            Order
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div class="pro-details-size-color">
                      <div
                        class="pro-details-size"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignitems: "center",
                        }}
                      >
                        <div
                          style={{ marginLeft: "10px", textAlign: "left" }}
                          class="pro-details-size-content"
                        >
                          <span>Starts on</span>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              value={selectedStartDate}
                              onChange={handleStartDateChange}
                            />
                          </MuiPickersUtilsProvider>
                        </div>

                        <div
                          class="pro-details-size-content"
                          style={{ marginLeft: "10px", textAlign: "left" }}
                        >
                          <span>Ends on</span>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              value={selectedEndDate}
                              onChange={handleEndDateChange}
                            />
                          </MuiPickersUtilsProvider>
                        </div>
                      </div>
                    </div>
                    x */}
                    {/* <div>
                      {selectedEndDate < selectedStartDate ? (
                        <div
                          style={{
                            color: "red",
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginTop: "20px",
                            textAlign: "left",
                          }}
                        >
                          Selected end date must be later than start date.
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div> */}

                    <div class="pro-details-social">
                      <ul style={{ justifyContent: "center" }}>
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
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
        );
      })}
    </>
  );
};

export default ProductPage;
