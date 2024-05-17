import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  FinalPrice,
  HotelDetails,
  HotelImages,
  Navbar,
} from "../../components";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHotel] = useState();

  useEffect(
    (singleHotel) => {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://fair-lime-angler-toga.cyclic.app/api/hotels/${id}`
          );
          setSingleHotel(data);
        } catch (err) {
          console.log(err);
        }
      })();
    },
    [id]
  );

  const { name, state } = singleHotel || {};

  return (
    <Fragment>
      <Navbar />
      <div className="single-hotel-page">
        <p className="hotel-name-add">
          {name}, {state}
        </p>
        <HotelImages singleHotel={singleHotel} />
        <div className="d-flex">
          <HotelDetails singleHotel={singleHotel} />
          <FinalPrice singleHotel={singleHotel} />
        </div>
      </div>
    </Fragment>
  );
};
