import "./HotelImages.css";

export const HotelImages = ({ singleHotel }) => {
  const { image, imageArr } = singleHotel || {}; // Set default empty object
  return (
    <div className="hotel-image-container d-flex gap-small">
      <div className="primary-image-container">
        <img className="primary-img" src={image} alt="primary" />
      </div>
      <div className="d-flex wrap gap-small">
        {imageArr &&
          imageArr.map((image) => (
            <img key={image} className="hotel-img" src={image} alt="hotel" />
          ))}
      </div>
    </div>
  );
};
