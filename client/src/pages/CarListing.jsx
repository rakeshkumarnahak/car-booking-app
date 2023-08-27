import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";
import axios from "axios";

const CarListing = () => {
  let carData;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://car-booking-five.vercel.app/api/car/allcars",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTlmNmE3OTMzNDczOGY3M2I1MTJjOSIsImVtYWlsIjoicHJpeWFuc2h1cGFuZGEuY3RwQGdtYWlsLmNvbSIsImlhdCI6MTY5MzA1NTQwOCwiZXhwIjoxNjkzMTQxODA4fQ.OJDE5D_31hlhD8tBGDrp03LURiYQO29HIdQPnXm7yw0",
    },
  };

  axios
    .request(config)
    .then((response) => {
      carData = response.data;
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
