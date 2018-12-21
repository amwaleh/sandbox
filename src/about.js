import React from "react";
import styled from "styled-components";
import PropType from "prop-type";
import Banner from "./banner";
import {
  Menu,
  Grid,
  Container,
  Divider,
  Header,
  Segment
} from "semantic-ui-react";
import { Transition, Trail } from "react-spring";

const H1 = styled.h1`
  color: teal;
  font-weight: 700;
  text-shadow: 1px 1px 2px black;
`;
const books = [
  {
    meta: "letters, gift, uganda, kenya",
    description: "Overnight deliveries countrywide,",
    poster: "http://dummyimage.com/163x109.bmp/ff4444/ffffff"
  },
  {
    title: "Mezzo Forte",
    meta: "postcard, envelope",
    description: "Same day service within major towns in Kenya",
    poster: "http://dummyimage.com/203x100.bmp/cc0000/ffffff"
  },
  {
    title: "Men with Brooms",
    meta: "night, delivered, kilimanjaro",
    description: "overnight deliveries within East African.",
    poster: "http://dummyimage.com/182x217.png/cc0000/ffffff"
  },
  {
    title: "Men with Brooms",
    meta: "warehouse,garage, fleet, logistic,",
    description: "Warehousing and logistics.",
    poster: "http://dummyimage.com/182x217.png/cc0000/ffffff"
  }
];
const BookCover = styled(Grid.Column)`

border-bottom: 3px solid teal;
box-shadow: 1px 1px 2px #ccc;
max-width: 500px;
min-width: 200px;
margin-right :40px;
margin-bottom:100px;
margin-top:20px;
padding:0 !important;
& img {
  width:100%;
  height:300px;
  filter: grayscale(0.6);
  transition: all .7s ease-in-out; 
}
&:hover {
  transform: scale(2.1);
  p {
    transform: scale(1.14);
    font-weight: 900;
    max-width:100%;
  }
  }
& p {
  color: #000;
  opacity:0.8
  font-weight:700;
  font-size:1rem;
  text-wrap:wrap;
  margin-left:10px;
  margin-bottom:10px;
  text-align:center;
  transition: all .7s ease-in-out; 
}

`;
const Content = styled.p`
  color: #767676;
  line-height: 2.5;
  letter-spacing: 1px;
  font-size: 1rem;
`;
const StyledContainer = styled(Container)`
  max-width: 400px;
`;
export default class Card extends React.Component {
  render() {
    return (
      <div className="App card">
        <Banner title="About Us" />
        <Grid centered>
          <Grid.Row>
            <Grid.Column computer="10" mobile="16" padded="horizontaly">
              <StyledContainer color={"teal"}>
                <Divider color="teal" inverted horizontal>
                  <Header as="h5" color="teal" />
                </Divider>
                <Content>
                  <p>
                    Courier International is a fully owned Kenyan company
                    offering premium courier services. We understand that When
                    it comes to customer orders the speed, security and
                    reliability of your delivery service can really make your
                    business stand out from the crowd.{" "}
                  </p>
                  <p>
                    Operating from more than 15 locations, our regional network
                    is operated by road and air, utilising a fleet of more than
                    80 vehicles:- from motorbikes and vans through to 40ft
                    trailers.
                  </p>
                  <p>
                    While for international deliveries we have agreements in
                    place with domestic airlines in order to provide a fully
                    managed service for your scheduled or ad-hoc logistical
                    requirements.
                  </p>
                </Content>
                <Divider />
              </StyledContainer>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid centered computer={4} padded="horizontally">
              <Trail
                items={books}
                keys={item => item.key}
                from={{ transform: "translate3d(0,-200px,0)" }}
                to={{ transform: "translate3d(0,40px,0)" }}
              >
                {item => props => (
                  <BookCover computer="6" key={Math.random()} style={props}>
                    <img
                      src={`https://source.unsplash.com/300x300/?${item.meta}`}
                    />
                    <p>{item.description}</p>
                  </BookCover>
                )}
              </Trail>
            </Grid>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column mobile="15" computer="10" widescreen="5">
              <StyledContainer textAlign="justified">
                <Divider color="teal" inverted horizontal>
                  <Header as="h4" color="teal">
                    Vision
                  </Header>
                </Divider>
                <Content>
                  <Header as="h5">
                    {" "}
                    To be recognized as the global leader in providing secure
                    logistics solutions
                  </Header>
                  <p>
                    Our vision is guided by four transformative strategies:
                    Deploying technology-enabled operations Providing unique and
                    industry-specific customer solutions Expanding our global
                    network Serving the needs of end consumers around the world
                  </p>
                </Content>
              </StyledContainer>
            </Grid.Column>
            <Grid.Column
              mobile="15"
              computer="10"
              style={{ marginTop: "20px" }}
            >
              <StyledContainer textAlign="justified">
                <Divider color="olive" inverted horizontal>
                  {" "}
                  <Header as="h4" color="teal">
                    Mission Statement
                  </Header>
                </Divider>
                <Content>
                  <Header as="h5" centered>
                    To increase our customer base and become the preferred
                    supplier of secure logistics solutions expertise in Kenya,
                    around the region and beyond through delivery of world-class
                    services.
                  </Header>
                </Content>
              </StyledContainer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
