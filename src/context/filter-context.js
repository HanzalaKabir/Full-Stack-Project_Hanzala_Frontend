import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer";
const initialValue = {
  isFilterModalOpen: false,
  priceRange: [300, 20000],
  noOfBathrooms: "Any",
  noOfBedrooms: "Any",
  noOfBeds: "Any",
  propertyType: "Any",
  travelRatings: 1,
  isCancelable: true,
};

const FilterContext = createContext(initialValue);

const FilterProvider = ({ children }) => {
  const [
    {
      isFilterModalOpen,
      priceRange,
      noOfBathrooms,
      noOfBedrooms,
      noOfBeds,
      propertyType,
      travelRatings,
      isCancelable,
    },
    filterDispatch,
  ] = useReducer(FilterReducer, initialValue);
  return (
    <FilterContext.Provider
      value={{
        isFilterModalOpen,
        priceRange,
        noOfBathrooms,
        noOfBedrooms,
        noOfBeds,
        propertyType,
        travelRatings,
        isCancelable,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
