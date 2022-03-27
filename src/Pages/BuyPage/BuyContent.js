import React from "react";
import { Link } from "react-router-dom";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Col } from "react-bootstrap";
import { Badge, Center } from "@mantine/core";
import { useSelector } from "react-redux";

const BuyContent = () => {
  const content = useSelector((state) => state.buyContentReducer.buyContent);
  const renderList = content.map((item) => {
    const { id, title, image, description } = item;
    return (
      <Col key={id}>
        <Center>
          <div className="buy__image">
            <Link to={`/buy/${id}`}>
              <img src={image} alt="koonya pavillion" />
            </Link>
          </div>
        </Center>
        <div className="buy__content">
          <h1>{title}</h1>

          <p> {description}</p>
          <div className="buy__items">
            <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
              3
            </Badge>
            <AirlineSeatIndividualSuiteIcon className="buy__icon" />
            <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
              4
            </Badge>
            <ShowerIcon className="buy__icon" />
            <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
              1,505
            </Badge>
            <LuggageIcon className="buy__icon" />
          </div>
        </div>
      </Col>
    );
  });

  return <>{renderList}</>;
};

export default BuyContent;