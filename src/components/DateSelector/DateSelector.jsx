import DatePicker from "react-datepicker";

export const DateSelector = () => {
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      placeholder="Check In"
      closeOnScroll={ture}
    />
  );
};
