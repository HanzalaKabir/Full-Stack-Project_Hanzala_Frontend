import { Fragment } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDate } from "../../context";
import "./Payments.css";

export const Payment = () => {
  const params = useParams();
  const { id } = params;

  const { guests, checkinDate, checkoutDate } = useDate();
  const numberOfNights =
    checkinDate && checkoutDate
      ? (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 3600 * 24)
      : 0;

  const [singleHotel, setSingleHotel] = useState({});

  useEffect(
    (singleHotel) => {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://full-stack-project-hanzala-backend.onrender.com/api/hotels/${id}`
          );
          setSingleHotel(data);
        } catch (err) {
          console.log(err);
        }
      })();
    },
    [id]
  );

  const { image, name, address, state, rating, price } = singleHotel;

  const totalPayableAmount = price * numberOfNights + 200;

  return (
    <Fragment>
      <header className="heading">
        <h1 className="heading-1">
          <Link className="link" to="/">
            Page Title
          </Link>
        </h1>
      </header>
      <main className="payments-main d-flex justify-center">
        <div className="d-flex direction-column gap-md final-details-container">
          <h2>Trip Details</h2>
          <div className="d-flex direction-column gap-md dates-and-guests">
            <h3>Your Trip</h3>
            <div>
              <p>Dates</p>
              <span>
                {checkinDate && checkoutDate ? (
                  <span>
                    {checkinDate.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                    -
                    {checkoutDate.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                ) : (
                  <span>Check-in and check-out dates not set</span>
                )}
              </span>
            </div>
            <div>
              <p>Guests</p>
              <span>{guests} Guests</span>
            </div>
          </div>
          <div className="d-flex direction-column gap-sm">
            <h3>Pay with</h3>
            <div>Razorpay</div>
          </div>
          <button className="button btn-primary btn-reserve cursor btn-pay">
            Confirm Booking
          </button>
        </div>
        <div className="final-details d-flex direction-column gap-large ">
          <div className="d-flex gap-sm direction-column">
            <div className="hotel-details-container d-flex direction-row">
              <img className="image" src={image} alt={name} />
              <div className="d-flex direction-column">
                <div className="d-flex direction-column grow-shrink-basis">
                  <span>{name}</span>
                  <span>
                    {address}, {state}
                  </span>
                </div>
                <div className="rating-container">
                  <span className="rating d-flex align-center">
                    <span className="material-icons-outlined">star</span>
                    <span>{rating}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="tag">
              Your booking is protected by{" "}
              <strong className="strong">Page Title</strong> cover
            </div>
            <div className="price-details-container">
              <div className="price-distribution d-flex direction-column">
                <h3>Price Details</h3>
                <div className="final-price d-flex align-center justify-space-between">
                  <span className="span">
                    Rs. {price} x {numberOfNights} nights
                  </span>
                  <span className="span">Rs. {price * numberOfNights}</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                  <span className="span">Service Fee</span>
                  <span className="span">Rs. 200</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                  <span className="span">Total</span>
                  <span className="span">Rs. {totalPayableAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
