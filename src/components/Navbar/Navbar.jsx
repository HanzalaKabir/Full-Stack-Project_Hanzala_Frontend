import "./Navbar.css";
import { useDate } from "../../context";

export const Navbar = () => {
  const { destination, checkinDate, checkoutDate, guests, dateDispatch } =
    useDate();

  const handleSearchClick = () => {
    dateDispatch({
      type: "OPEN_SEARCH-MODAL",
    });
  };

  return (
    <header className="heading d-flex  align-center main">
      <h1 className="heading-1">
        <a className="link" href="/">
          Page Title
        </a>
      </h1>
      <div
        className="form-container d-flex align-center cursor-pointer shadow"
        onClick={handleSearchClick}
      >
        <span className="form-option">{destination || "Any Where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {checkinDate && checkoutDate
            ? `${checkinDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}-${checkoutDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}`
            : "Any Week"}
        </span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {guests > 0 ? `${guests} guests` : "Add Guests"}
        </span>
        <span className=" search material-icons-outlined ">search</span>
      </div>
      <nav className="d-flex align-center gap-large">
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-icons-outlined profile-option menu">
            menu
          </span>
          <span className="material-icons-outlined profile-option person">
            person
          </span>
        </div>
      </nav>
    </header>
  );
};
