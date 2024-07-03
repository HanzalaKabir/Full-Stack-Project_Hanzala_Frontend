import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { useState } from "react";
import "./DateSelector.css";
import { useDate } from "../../context";

export const DateSelector = ({ placeholder, checkInType }) => {
  const { checkinDate, checkoutDate, dateDispatch } = useDate();

  const handleDateChange = (date) => {
    dateDispatch({
      type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    });
  };

  // console.log({checkinDate,checkoutDate});

  const handleDateFocus=()=>{
    dateDispatch({
      type:"DATE_FOCUS",
    })
  }

  return (
    <DatePicker
      className="search-dest input"
      selected={checkInType === "in" ? checkinDate : checkoutDate}
      onChange={(date) => handleDateChange(date)}
      onFocus={handleDateFocus}
      dateFormat="dd/MM/yyyy"
      placeholderText="Add Dates"
      closeOnScroll={true}
    />
  );
};
