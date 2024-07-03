import "./HotelDetails.css";

export const HotelDetails = ({ singleHotel }) => {
  const {
    hostName,
    hostJoinedOn,
    numberOfguest,
    numberOfBathrooms,
    numberOfBeds,
    numberOfBedrooms,
    ameneties,
  } = singleHotel || {};

  return (
    <div className="hotel-details-container">
      <div className="host-details">
        <p className="host-name p">
          Hosted by {hostName}, Joined on {hostJoinedOn}
        </p>
        <span className="span hotel-room-details">
          {numberOfguest} guests. {numberOfBedrooms} bedroom. {numberOfBeds}{" "}
          bed. {numberOfBathrooms} bathroom.{" "}
        </span>
      </div>
      <hr />
      <div className="key-features host-details">
        <div className="gutter-bottom-small">
          <p className="p d-flex align-center gap">
            <span className="apps material-icons-outlined">apps</span>Dedicated
            Workspace
          </p>
          <span className="span">
            A common area with wifi that is well suited for working
          </span>
        </div>
        <div className="gutter-bottom-small">
          <p className="p d-flex align-center gap">
            <span className="apps material-icons-outlined">apps</span>Great
            Location
          </p>
          <span className="span">
            80% of recent guests gave the location a 5-star rating
          </span>
        </div>
        <p className="p d-flex align-center gap">
          <span className="apps material-icons-outlined">apps</span>Free
          cancellation before 7 days of check-in
        </p>
      </div>
      <hr />
      <div className="amenities-container host-details">
        <p className="p amenities">What this place offers</p>
        <div className="d-flex gap-xxl">
          <div className="d-flex direction-column">
            {ameneties &&
              ameneties.map((aminity) => {
                return (
                  <>
                    <span className="span d-flex align-center gap">
                      <span className="apps material-icons-outlined features">
                        apps
                      </span>
                      {aminity}
                    </span>
                  </>
                );
              })}
          </div>
          <div className="d-flex direction-column">
            <span className="span d-flex align-center gap features">
              <span className="apps material-icons-outlined">apps</span>Free
              parking on premises
            </span>
            <span className="span d-flex align-center gap features">
              <span className="apps material-icons-outlined">apps</span>
              Dedicated Workspace
            </span>
          </div>
        </div>
      </div>
      <div className="facilities host-details">
        <p className="p amenities">What this place offers</p>
        <div className="d-flex direction-column gap">
          <span className="span d-flex align-center gap">
            <span className="material-icons-outlined">apps</span>Kitchen
          </span>
          <span className="span d-flex align-center gap">
            <span className="material-icons-outlined">apps</span>Free parking on
            premises
          </span>
        </div>
      </div>
    </div>
  );
};
