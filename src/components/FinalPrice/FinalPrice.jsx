import "./FinalPrice.css";
import { useDate } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";
import { useNavigate } from "react-router-dom";

export const FinalPrice = ({ singleHotel }) => {
  const { price, rating, _id } = singleHotel || {};

  const navigate = useNavigate();

  const { guests, dateDispatch, checkinDate, checkoutDate } = useDate();

  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

  const handleReserveClick = () => {
    navigate(`/confirm-booking/stay/${_id}`);
  };

  return (
    <div className="price-details-container d-flex direction-column gap shadow">
      <div className="price-rating d-flex align-center justify-space-between">
        <p>
          <span className="fs-bold fs-large">Rs. {price}/night</span>
        </p>
        <span className="rating d-flex align center">
          <span className="material-icons-outlined">star</span>\
          <span>{rating}</span>
        </span>
      </div>
      <div className="d-flex direction-column">
        <div className="grid-container-two-col selected-dates">
          <div className="checkin loc-container">
            <label className="label">Check in</label>
            <DateSelector checkInType="in" />
          </div>
          <div className="checkin loc-container">
            <label className="label">Check out</label>
            <DateSelector checkInType="out" />
          </div>
        </div>
        <div className="guests gutter-sm">
          <p>Guests</p>
          {guests <= 0 ? (
            <input
              className="guest-count-input"
              type="number"
              placeholder="Add Guests"
              value={guests}
              onChange={handleGuestChange}
            />
          ) : (
            <span>{guests} guests</span>
          )}
        </div>
      </div>
      <div>
        <button
          className="button btn-reserve btn-primary cursor "
          disabled={checkinDate && checkoutDate && guests > 0 ? false : true}
          onClick={handleReserveClick}
        >
          Reserve
        </button>
      </div>
      <div className="price-distribution d-flex direction-column">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Rs. {price} x 2 nights</span>
          <span className="span">Rs. {price * 2}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Service fee</span>
          <span className="span">Rs. 500</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Total</span>
          <span className="span">Rs. {price * 2 + 500}</span>
        </div>
      </div>
    </div>
  );
};
