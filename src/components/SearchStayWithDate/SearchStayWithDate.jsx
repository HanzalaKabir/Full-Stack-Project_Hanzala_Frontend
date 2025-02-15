import { useDate, useCategory } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SearchStayWithDate = () => {
  const [hotels, setHotels] = useState([]);
  const { destination, guests, isSearchResultOpen, dateDispatch } = useDate();
  const { hotelCategory } = useCategory();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://full-stack-project-hanzala-backend.onrender.com/api/hotels?category=${hotelCategory}`
        );
        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const handleDestinationChange = (event) => {
    dateDispatch({
      type: "DESTINATION",
      payload: event.target.value,
    });
  };

  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

  const handleSearchResultClick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload: address,
    });
  };

  const handleDestinationFocus = () => {
    dateDispatch({
      type: "SHOW_SEARCH_RESULT",
    });
  };

  const handleSearchButtonClick = () => {
    dateDispatch({
      type: "CLOSE_SEARCH_MODAL",
    });
    navigate(`/hotels/${destination}`);
  };

  const handleCloseClick = () => {
    dateDispatch({
      type: "CLOSE_SEARCH_MODAL",
    });
  };

  const destinationOptions = hotels.filter(
    ({ address, city, state, country }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <div className="destination-container">
      <div className="destination-options d-flex align-center absolute">
        <div className="location-container">
          <label className="label">Where</label>
          <input
            value={destination}
            className="input search-dest"
            onChange={handleDestinationChange}
            onFocus={handleDestinationFocus}
            placeholder="Search Destination"
            autoFocus
          />
        </div>
        <div className="location-container">
          <label className="label">Check In</label>
          <DateSelector checkInType="in" />
        </div>
        <div className="location-container">
          <label className="label">Check Out</label>
          <DateSelector checkInType="out" />
        </div>
        <div className="location-conatiner">
          <label className="label">No. of Guests</label>
          <input
            className="input search-dest"
            value={guests}
            placeholder="Add Guests"
            onChange={handleGuestChange}
          />
        </div>
        <div
          className="search-container d-flex align-center"
          onClick={handleSearchButtonClick}
        >
          <span className="material-icons-outlined">search</span>
          <span>Search</span>
        </div>
        <div className="close-button-container d-flex align-center">
          <span className=" material-icons-outlined" onClick={handleCloseClick}>
            close
          </span>
        </div>
      </div>
      {isSearchResultOpen && (
        <div className="search-results-container absolute">
          {destinationOptions &&
            destinationOptions.map(({ address, city }) => (
              <p
                className="p cursor-pointer"
                onClick={() => handleSearchResultClick(address)}
              >
                {address}, {city}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};
