import React, { useState } from "react";
import "./HouseImg.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Center } from "@mantine/core";
import { Link } from "react-router-dom";
import { Image } from "@mantine/core";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import ProtectMessage from "./ProtectMessage";

const HouseImg = () => {
  const [loading, setLoading] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  if (loading) {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row md={2} sm={1} xs={1}>
          <Col>
            <div className="house__img__left">
              <Center>
                <h1>
                  Images helps the buyer to choose <br />
                  yours as thier priority
                </h1>
              </Center>
              <Center>
                <p>Note: Upload at least 5 pictures of your house</p>
              </Center>
            </div>
          </Col>
          <Col>
            <div className="house__img__right">
              <div className="house__img__title">Upload Images</div>

              <div className="house__img__content">
                <Row md={2}>
                  <Col>
                    <Image
                      width={298}
                      height={261}
                      src={null}
                      alt="With default placeholder"
                      withPlaceholder
                      style={{ border: "solid 2px", width: "330px" }}
                    />
                  </Col>
                  <Row md={2}>
                    <Col className="second__col">
                      <Image
                        width={140}
                        height={120}
                        src={null}
                        alt="With default placeholder"
                        withPlaceholder
                        style={{ border: "dotted 2px" }}
                      />
                    </Col>
                    <Col className="second__col">
                      <Image
                        width={140}
                        height={120}
                        src={null}
                        alt="With default placeholder"
                        withPlaceholder
                        style={{ border: "dotted 2px" }}
                      />
                    </Col>
                    <Col className="second__col">
                      <Image
                        width={140}
                        height={120}
                        src={null}
                        alt="With default placeholder"
                        withPlaceholder
                        style={{ border: "dotted 2px" }}
                      />
                    </Col>
                    <Col className="second__col">
                      <Image
                        width={140}
                        height={120}
                        src={null}
                        alt="With default placeholder"
                        withPlaceholder
                        style={{ border: "dotted 2px" }}
                      />
                    </Col>

                    <Col className="second__col">
                      <Image
                        width={140}
                        height={120}
                        src={null}
                        alt="With default placeholder"
                        withPlaceholder
                        style={{ border: "dotted 2px" }}
                      />
                    </Col>
                    <Col className="second__col">
                      <Image
                        width={140}
                        height={120}
                        src={null}
                        alt="With default placeholder"
                        withPlaceholder
                        style={{ border: "dotted 2px" }}
                      />
                    </Col>
                  </Row>
                </Row>
              </div>

              <Link to="/sell/personalinfo">
                <Button variant="primary" size="lg" className="house__btn">
                  Next
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <ProtectMessage />;
  }
};

export default HouseImg;
