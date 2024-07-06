import "./Filter.css";
import {
  PriceRange,
  RoomsAndBeds,
  PropertyType,
  Ratings,
  FreeCancellation,
} from "./index.js";
import { useFilter } from "../../context/filter-context.js";

export const Filter = () => {
  const { filterDispatch } = useFilter();

  const handleFilterModalCloseClick = () => {
    filterDispatch({
      type: "CLOSE_FILTER_MODAL",
    });
  };

  const handleClearClick = () => {
    filterDispatch({
      type: "CLEAR_ALL",
    });
  };

  return (
    <div className="filter-modal">
      <div className="filter-page shadow">
        <div className="d-flex align-center justify-space-between">
          <span className="filter-label">Filter</span>
          <button
            className="button btn-close cursor-pointer d-flex align-center justify-center "
            onClick={handleFilterModalCloseClick}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Ratings />
        <FreeCancellation />
        <div className="d-flex align-center justify-space-between">
          <button
            className="button cursor btn-link-primary"
            onClick={handleClearClick}
          >
            Clear All
          </button>
          <button
            className="button cursor btn-primary btn-apply"
            onClick={handleFilterModalCloseClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
