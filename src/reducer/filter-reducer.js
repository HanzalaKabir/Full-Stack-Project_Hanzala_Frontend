export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SHOW_FILTER_MODAL":
      return {
        ...state,
        isFilterModalOpen: !state.isFilterModalOpen,
      };

    case "CLOSE_FILTER_MODAL":
      return {
        ...state,
        isFilterModalOpen: !state.isFilterModalOpen,
      };
    case "MINIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          Math.min(
            payload.newValue[0],
            payload.priceRange[1] - payload.minDifference
          ),
          payload.priceRange[1],
        ],
      };
    case "MAXIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          payload.priceRange[0],
          Math.max(
            payload.newValue[1],
            payload.priceRange[0] + payload.minDifference
          ),
        ],
      };
    case "BEDROOMS":
      return {
        ...state,
        noOfBedrooms:
          payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
      };
    case "BEDS":
      return {
        ...state,
        noOfBeds:
          payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
      };
    case "BATHROOMS":
      return {
        ...state,
        noOfBathrooms:
          payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
      };
    case "PROPERTY_TYPE":
      return {
        ...state,
        propertyType: payload,
      };
    case "RATING":
      return {
        ...state,
        travelRatings: Number(payload),
      };
    case "CANCELABLE":
      return {
        ...state,
        isCancelable: payload,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        priceRange: [300, 20000],
        noOfBathrooms: "Any",
        noOfBedrooms: "Any",
        noOfBeds: "Any",
        propertyType: "Any",
        travelRatings: 1,
        isCancelable: true,
      };
    default:
      return state;
  }
};
