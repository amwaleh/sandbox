import React from "react";
import { Grid, Segment, Header, Container, Icon } from "semantic-ui-react";
import styled from "styled-components";

const Images = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-image: url(${props =>
    `'https://source.unsplash.com/600x300/?${props.topic} ${Math.random()}'`});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  border-radius: 5px;
  margin-bottom: 50px;
  filter: grayscale(0.6) hue-rotate(20deg) brightness(1.15);
  &:hover {
    transition: filter 1s ease-in-out 0.6s;
    filter: grayscale(0.2) hue-rotate(0deg) brightness(1.15);

    & div {
      transition: opacity 1s ease-in-out 0.6s;
      opacity: 0;
    }
  }
`;
const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: ${props =>
    `linear-gradient(to ${props.direction ||
      "right"},rgba(0,0,50,0.3) 60%,#00b5ad82 90%)`};

  transition: opacity 0.8s ease-in-out 1s;
`;
export default class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid.Row reversed="computer" style={{ minHeight: "300px" }}>
          <Grid.Column>
            <Images topic="courier,mail,cargo ">
              <Gradient />
            </Images>
          </Grid.Column>
        </Grid.Row>
        <Grid centered padded="vertically" as={Container}>
          <Grid.Row reversed="computer" style={{ minHeight: "200px" }}>
            <Grid.Column
              mobile="16"
              computer="13"
              verticalAlign="middle"
              textAlign="justified"
            >
              <Header textAlign=" center" color="teal" as="h2">
                Are you planing to send a Parcel or Cargo ?
              </Header>

              <p>
                We are the number one in the efficient co-ordination and
                movement of freight in East Africa. Our size and experience
                allow us to tailor highly competitive solutions for all our
                customers. Whether you are a small business looking to move less
                than a container, or an experienced logistics professional
                looking to improve your air and ocean freight operations, we
                will deliver a personalized service.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{ minHeight: "500px", fontSize: "1rem", lineHeight: "1.8" }}
          >
            <Grid.Column
              computer="5"
              tablet="15"
              style={{ paddingBottom: "100px" }}
            >
              <Header textAlign="mobile center" color="teal" size="large">
                WHO WE ARE
              </Header>
              <Images topic="courier,mail,cargo" style={{ height: "200px" }}>
                <Gradient />
                We are Specialists in overnight deliveries country wide, same
                day service within major towns in Kenya, over night deliveries
                within East African countries and the rest of the world,
                warehousing and logistics.
              </Images>
            </Grid.Column>
            <Grid.Column
              computer="5"
              tablet="15"
              style={{ paddingBottom: "80px" }}
            >
              <Header textAlign="mobile center" color="teal" size="large">
                OUR SERVICES
              </Header>
              <Images topic="courier,mail,cargo" style={{ height: "200px" }}>
                <Gradient />
                We develop and demonstrate our expertise through our innovative
                and leading edge approach to delivering the right services.
                Trust us to do the right thing.
              </Images>
            </Grid.Column>
            <Grid.Column
              computer="5"
              tablet="15"
              style={{ paddingBottom: "60px" }}
            >
              <Header textAlign="mobile center" color="teal" size="large">
                CONTACTS
              </Header>
              <Images topic="telephone" style={{ height: "200px" }}>
                <Gradient />
                <ul style={{ listStyle: "none" }}>
                  <li class="location">
                    <Icon name="building" color="teal" />
                    ADDRESS: Mwalimu Cooperative Building, Tom Mboya street
                  </li>
                  <li class="tel">
                    <Icon name="tty" color="teal" />
                    TELEPHONE: +254-713-592-975{" "}
                  </li>
                  <li class="email">
                    {" "}
                    <Icon name="mail" color="teal" />
                    email: info@courierint.com
                  </li>
                </ul>
              </Images>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column
              textAlign="center"
              verticalAlign="middle"
              style={{ height: "400px", margin: "50px 0" }}
            >
              {" "}
              <Images topic="customs,tax,border">
                <Gradient
                  direction="left"
                  style={{
                    aligItems: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: " center"
                  }}
                >
                  <Header size="huge" style={{ color: "white" }}>
                    Specialist in Parcel Delivery, logistic & Storage
                  </Header>
                </Gradient>
              </Images>
            </Grid.Column>
          </Grid.Row>
        </Grid>{" "}
        <Grid as={Container}>
          <Grid.Row style={{ minHeight: "500px" }}>
            <Grid.Column computer="7" tablet="15">
              <Images topic="customs,tax,border">
                <Gradient />
              </Images>
            </Grid.Column>
            <Grid.Column
              mobile="16"
              computer="8"
              verticalAlign="middle"
              textAlign="justified"
            >
              <Header
                textAlign="mobile center"
                color="teal"
                size="large"
                style={{ margin: `10px 20px` }}
              >
                Customs service
              </Header>
              <p style={{ margin: `10px 20px` }}>
                Courier International , we are specialist in shipping with
                extensive customs knowledge and experience. Our wide range of
                Customs Services support a variety of customs needs, ensuring
                smooth and efficient clearance processes. Best of all, our
                customs expertise allows our customers to focus on their core
                business and gain peace of mind as shipments traverse the globe!
              </p>
            </Grid.Column>
          </Grid.Row>
          <divider />
          <Grid.Row reversed="computer" style={{ minHeight: "500px" }}>
            <Grid.Column computer="7" tablet="15">
              <Images topic="map,shipping,freight">
                <Gradient direction={"left"} />
              </Images>
            </Grid.Column>
            <Grid.Column
              mobile="16"
              computer="8"
              verticalAlign="middle"
              textAlign="justified"
            >
              <Header
                textAlign="mobile center"
                color="teal"
                size="large"
                style={{ margin: `10px 20px` }}
              >
                Shipping Solution
              </Header>
              <p style={{ margin: `10px 20px` }}>
                It does not matter if you are shipping packages or pallets from
                Nairobi to South Sudan or from Tanzania to the USA. We have the
                shipping solution for your every need.
                <br />
                Shipping is more than delivering your packages or heavy freight.
                Shipping is getting your goods to the right place, on time,
                hassle free.So whether your parcelâ€™s high or low value, bulky
                or light, urgent or less time-critical, we have a service that
                will satisfy your needs.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
